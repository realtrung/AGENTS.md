#!/usr/bin/env node
/**
 * Validates a markdown file against planning-style rules from SKILL.md.
 * Usage: node validate.js <file.md>
 * Exit 0 = clean, Exit 1 = violations found.
 */
import { readFileSync } from 'fs'

const RULES = {
	WIDTH: 'WIDTH',
	MULTI_SENTENCE: 'MULTI-SENTENCE',
	UNLABELED: 'UNLABELED',
	IMPLICIT_PARAGRAPH: 'IMPLICIT-PARAGRAPH',
}

// Common abbreviations that contain ". " but are not sentence boundaries.
const ABBREVIATION_PATTERN = /\b(e\.g|i\.e|etc|vs|Mr|Mrs|Dr|Prof|Sr|Jr|[A-Z])\.\s+[A-Z]/

/**
 * Strip inline code spans so their content doesn't trigger false positives.
 * @param {string} line
 */
function stripCodeSpans(line) {
	return line.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length))
}

/**
 * Detect two or more sentences joined on one line.
 * Heuristic: sentence-ending punctuation (. ! ?) followed by a space and a
 * capital letter, excluding known abbreviation patterns.
 * @param {string} line
 */
function hasMultipleSentences(line) {
	const stripped = stripCodeSpans(line)
	// Remove the label portion up to the first colon to avoid "Label: Sentence.
	// Another." false positives — actually we want those flagged, so keep.
	const boundary = /[.!?]\s+[A-Z]/
	if (!boundary.test(stripped)) return false
	// Suppress if it looks like a known abbreviation
	if (ABBREVIATION_PATTERN.test(stripped)) return false
	return true
}

/**
 * Returns true when a bullet item has no label (no colon before substantial
 * text). Unlabeled bullets are valid under a header that provides context, so
 * this is reported as a warning, not an error.
 * @param {string} bulletContent  Text after the leading "- "
 */
function isMissingLabel(bulletContent) {
	// Has a label if a colon appears before the end of the first clause.
	// Ignore colons inside parentheses or code spans.
	const withoutCodeSpans = bulletContent.replace(/`[^`]*`/g, '')
	const withoutParens = withoutCodeSpans.replace(/\([^)]*\)/g, '')
	return !withoutParens.includes(':')
}

function truncate(str, max = 80) {
	return str.length > max ? str.slice(0, max - 3) + '...' : str
}

function validate(filePath) {
	let text
	try {
		text = readFileSync(filePath, 'utf8')
	} catch {
		console.error(`Cannot read file: ${filePath}`)
		process.exit(2)
	}

	const lines = text.split('\n')
	const violations = []

	let inCodeBlock = false
	let inFrontmatter = false
	let prevLineWasProse = false

	for (let i = 0; i < lines.length; i++) {
		const lineNum = i + 1
		const line = lines[i]

		// --- Frontmatter ---
		if (i === 0 && line.trim() === '---') {
			inFrontmatter = true
			continue
		}
		if (inFrontmatter) {
			if (line.trim() === '---') inFrontmatter = false
			continue
		}

		// --- Code blocks ---
		if (/^```/.test(line)) {
			inCodeBlock = !inCodeBlock
			prevLineWasProse = false
			continue
		}
		if (inCodeBlock) continue

		// --- Blank lines reset prose tracking ---
		if (line.trim() === '') {
			prevLineWasProse = false
			continue
		}

		// --- Status/task-list items like "- [ ]", "- [.]", "- [x]" ---
		if (/^\s*- \[/.test(line)) {
			prevLineWasProse = false
			continue
		}

		// RULE: Width — max 90 characters
		if (line.length > 90) {
			violations.push({
				line: lineNum,
				rule: RULES.WIDTH,
				severity: 'error',
				detail: `${line.length} chars — max is 90`,
				text: line,
				fix: 'Split into two lines or shorten the phrasing.',
			})
		}

		// RULE: Length — one sentence per line; never chain two sentences
		if (hasMultipleSentences(line)) {
			violations.push({
				line: lineNum,
				rule: RULES.MULTI_SENTENCE,
				severity: 'error',
				detail: 'Multiple sentences detected on one line',
				text: line,
				fix: 'Split each sentence onto its own line.',
			})
		}

		// RULE: Label — every non-structural line must start with a label
		const isHeading = /^#{1,6} /.test(line)
		const isBlockquote = /^> /.test(line)
		if (!isHeading && !isBlockquote) {
			const bulletMatch = line.match(/^(\s*)[-*+] (.+)$/)
			const content = bulletMatch ? bulletMatch[2] : line
			if (isMissingLabel(content)) {
				violations.push({
					line: lineNum,
					rule: RULES.UNLABELED,
					severity: 'warning',
					detail: 'No label found (no colon before the content)',
					text: line,
					fix:
						'Add a label ("Label: ...") or confirm this line is under a ' +
						'header that already provides the full context.',
				})
			}
		}

		// Classify this line for the next iteration.
		const isStructural = /^(#{1,6} |[-*+] |\d+\. |>)/.test(line)
		const currentLineIsProse = !isStructural

		// RULE: Implicit paragraph — consecutive prose lines collapse into one
		// paragraph when rendered, hiding the line boundaries.
		if (currentLineIsProse && prevLineWasProse) {
			violations.push({
				line: lineNum,
				rule: RULES.IMPLICIT_PARAGRAPH,
				severity: 'error',
				detail: 'Prose line follows another prose line with no blank line between',
				text: line,
				fix: 'Add a blank line between prose lines, or convert to labeled bullets.',
			})
		}

		prevLineWasProse = currentLineIsProse
	}

	return violations
}

// --- Output ---

const filePath = process.argv[2]
if (!filePath) {
	console.error('Usage: node validate.js <file.md>')
	process.exit(2)
}

const violations = validate(filePath)

if (violations.length === 0) {
	console.log(`OK  ${filePath}`)
	process.exit(0)
}

const errors = violations.filter((v) => v.severity === 'error')
const warnings = violations.filter((v) => v.severity === 'warning')

console.log(`FAIL  ${filePath}  (${errors.length} error(s), ${warnings.length} warning(s))\n`)

for (const v of violations) {
	const tag = v.severity === 'error' ? 'ERR ' : 'WARN'
	console.log(`  ${tag}  Line ${v.line}  [${v.rule}]`)
	console.log(`        ${truncate(v.text)}`)
	console.log(`        ${v.detail}`)
	console.log(`        Fix: ${v.fix}`)
	console.log()
}

// Exit 1 only on errors; warnings alone do not fail.
process.exit(errors.length > 0 ? 1 : 0)
