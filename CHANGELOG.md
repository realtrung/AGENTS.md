# Changelog

Versions follow [SemVer](https://semver.org/): patch for wording fixes, minor for new rules, major for breaking changes to the workflow. Entries are ordered newest first.

## 3.2.3 (2026-06-18)

- Scope language: replaced "implementation work" with "code changes" in the RGR intro
  and rule 6 to reflect that the RGR cycle governs all code modifications, not
  just feature implementation. Rule 6 now expands the RGR acronym inline.
- Project Documentation Structure: replaced the imperative "active workspace must
  have" tree with a declarative `workspace/` tree applicable to both single-repo
  and monorepo setups. Removed the "Monorepo Scope" section — the single tree now
  covers all cases.
- Execution Flow step 5: added "commit `RED` first" to reinforce that the RED
  phase ends with a commit before GREEN begins.
- Commit formats: renamed "Commit Rule" to "Commit Formats" and removed the
  granularity sentence and Conventional Commit types note — the format lines
  suffice.
- RGR GREEN goal: shortened from "Write the minimum implementation code to make
  the tests pass" to "Write the minimum code to make the tests pass."
- Template cleanup: removed I3 from the iterations.md template example; replaced
  the delivered.md placeholder with "Write concise task outcome."
- Core Operating Rule 4 wording trimmed: "individual tasks contribute toward
  that bar" → "Tasks should contribute toward that standard."

## 3.1.3 (2026-06-17)

- Core Operating Rules: reordered so independent-approach and no-unilateral-decision
  rules (now 2 and 3) precede the quality and process rules (4–7). Task sizing (5) and
  RGR adherence (6) now sit below production-grade quality (4).
- Commit Rule: replaced the Type/Scope/Examples breakdown with two format lines —
  `<type>(<WorkID>): <message>` for single repos, `<type>(<workspace>/<WorkID>):
  <message>` for monorepos — plus a generic "Use Conventional Commit types" note.
- Chat and Writing Style: removed the Always/In chat structure, the "don't narrate
  your own process" rule, the "if you're wrong, admit it plainly" directive, and the
  "Applies to everything" preamble. The section is now a flat five-bullet list with a
  standalone closing sentence.
- Section rename: "Agentic TDD Protocol" → "RGR Cycle Requirements".
- Template code fences: changed ` ```md ` to bare ` ``` ` on all document templates.

## 3.0.3 (2026-06-16)

- Core Operating Rules: reordered rules 5–7 — independent-approach rule (5) now precedes
  no-unilateral-decisions rule (6); production-grade quality rule (7) scoped from "every
  single task" to "every completed slice and iteration".
- Agentic TDD Protocol intro: replaced vague "clarify intent / success metrics" framing
  with explicit quality-gate labels per phase — correctness (RED), completeness (GREEN),
  clarity (REFACTOR).
- Principles of Engagement: replaced "flawed tests can be corrected in GREEN" bullet with
  "include specific test results and error messages in your thought process".

## 3.0.2 (2026-06-15)

- Execution Flow step 7: "update `delivered.md` and slice status to reflect current
  progress" → "update iteration `delivered.md` → commit".

## 3.0.1 (2026-06-15)

- Chat and Writing Style: moved "cut fluff, cheerful filler, praise" bullet from Always to
  In chat; trimmed "keep this style" note (removed jargon-source example).
- Execution Flow step 7: "iteration/slice statuses" → "slice status".
- Commit Rule: clarified monorepo WorkID note — "to tie commits to implementation tasks".

## 3.0.0 (2026-06-15)

- Condensed Core Operating Rules from 10 to 7: removed per-iteration/slice restriction
  rules ("Handle active iteration only", "Never invent task breakdown", "Focus on next
  task only", "Record outcomes"), added task-sizing rule, moved RGR adherence rule up.
- Overhauled Execution Flow: removed "propose task" and "wait for user confirmation"
  steps; added explicit `task-plan.md` write (step 4) and `task-report.md` verify
  (step 6); condensed active-iteration/slice identification into two steps.
- RGR cycle: REFACTOR phase now commits immediately with type `refactor`; removed the
  UAT approval gate ("Do not commit yet / Wait for UAT result"); added explicit commit
  types (`test`, `feat`, `refactor`) to all three phases.
- Removed the "Task Plan" section (`What next?` behavior and `task-uat.md` checklist).
- Commit Rule: moved granularity sentence here; added it before the format line.
- `delivered.md` template example entry updated to generic placeholder text.

## run-slice 1.2.0 (2026-06-15)

- Replaced `task-uat.md` with `task-report.md` in the Execution Loop (step 5).
- Added explicit commit types to loop RGR steps (`commit test`, `commit feat`,
  `commit refactor`).
- Removed "no per-task approvals" language from the description and body.
- Reorganized loop/close rules into a new "Principles of Engagement" section.
- Renamed "Slice Report" template section header to path-qualified form.

## 2.7.1 (2026-06-15)

- Fixed remaining `changelog.md` references missed in 2.7.0: Execution Flow step 2 in `AGENTS.md`, `.building/` bullet in `README.md`, and step 6 in the `run-slice` skill.

## 2.7.0 (2026-06-15)

- Renamed `changelog.md` to `delivered.md` in the `.building/` structure; updated all references in `AGENTS.md` and the `run-slice` skill.

## 2.6.0 (2026-06-15)

- Extracted "Run the slice" into a standalone skill at `.agents/skills/run-slice/SKILL.md`; removed the inline section from `AGENTS.md`.

## 2.5.0 (2026-06-14)

- Rewrote "Communication Style" as "Chat and Writing Style": now governs tone for all prose (chat and documents), leads with claim-and-mechanism, and bars copying jargon from sources.
- Added `.gitignore` for the workflow scratch docs; `task-plan.md`, `task-uat.md`, and `slice-report.md` are now ignored instead of manually removed before committing.
- Promoted `slice-report.md` to a required document with a template (Delivered / Emergent Decisions / Caveats); `Run the slice` now closes by writing it.
- Reworded `Run the slice` behavior around document names and path-qualified the `task-plan.md` template heading.

## 2.4.0 (2026-06-11)

- Added `Run the slice` protocol: autonomous end-to-end slice execution with preconditions, loop behavior, and stop conditions.

## 2.3.0 (2026-06-03)

- Added Core Operating Rule 10: never treat a user proposal as settled; always determine the right approach independently.

## 2.2.0 (2026-06-03)

- Added explicit rule: plan goals state intent only; decisions and implementation details belong in `task-plan.md`.
- Tightened `plan.md` description in the `.building/` structure diagram (removed "definitions").

## 2.1.1 (2026-06-03)

- Changed "If they're wrong" to "If the user is wrong" in Communication Style for unambiguous referent.

## 2.1.0 (2026-06-02)

- Renamed "Task Proposal" to "Task Plan" to emphasize planning over proposing.
- Added sizing rule: tasks must target meaningful units of behavior, not individual functions.
- Tightened task plan requirements prose.

## 2.0.1 (2026-06-02)

- Specified explicit filenames for task proposal artifacts (`task-plan.md`, `task-uat.md`) replacing the vague "file under `docs/`".
- Moved the temporary-document removal rule from Commit Rule into the Task Proposal requirements section for better cohesion.

## 2.0.0 (2026-06-02)

### Removed

- `spec.md` — merged into `plan.md`. Iteration scope and implementation approach now live in one file.
- `design.md` — no longer a required document.
- `[?]` blocked and `[-]` cancelled status values.
- Double-Check section.
- "Plan at the iteration level" and "For light work, a slice may consist of a single implementation task" rules from Core Operating Rules.

### Changed

- `plan.md` template — replaced `## Overview`, `## Iteration Decisions`, and detailed slice subsections (`### Goal`, `### Scope`, etc.) with simpler `## I1 Goal`, `## Slice Status`, `## S1 Goal`.
- `changelog.md` template — entries now grouped under slice headers (`## S1`, `## S2`).
- Execution Flow — reads only `plan.md` instead of `spec.md` and `plan.md`.
- Communication Style — condensed, removed redundant directives.
- Core Operating Rules — reordered and tightened from 11 to 9 rules.
- Monorepo Scope — simplified.
- Phase names — standardized to uppercase (RED, GREEN, REFACTOR).
- `.building/` structure diagram — added inline comments.

## 1.1.0 (2026-05-29)

- Expanded the Commit Rule with explicit type, scope, and monorepo scoping guidance, plus examples.
- Clarified that the RGR refactor phase holds the commit until user acceptance.

## 1.0.0 (2026-05-29)

- Initial versioned release of the workflow spec.
