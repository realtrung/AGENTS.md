---
name: planning-style
description: Writing style for all planning documents in this repository. Read before
  writing or editing any planning artifact — plan.md, task-plan.md, task-uat.md.
  Not required for non-planning prose.
---

# Planning Artifact Writing Style

## Rules

- Label: every line starts with a label
- Scannable: one idea per line — every item is scannable without surrounding context
- Format: labeled bullets only; prose paragraphs are not permitted
- Detail: name the choice and its rationale; omit implementation specifics
- Width: max 90 characters per line (including spaces)
- Length: one sentence per line; never chain two sentences

## Two bullet structures

Labeled: use when each item is self-contained.

```example
- Deduplication: URL-first, then checksum
- Failure: automatic retry up to `MAX_RETRIES`
```

Unlabeled: for items that share a common theme.

```example
To-do:
- establish the data model
- wire the first API endpoint
```

Quick rules:

- children are unlabeled when the header provides full context
- children are labeled when each needs its own identifier

## Context parentheticals

Usage: `(...)` for a qualifying note — it constrains the same idea, not a new one.

```example
- Provider: free-text column (no lookup table)
- id: application-generated UUID (not autoincrement)
```

## Self-check

- When: run after writing or editing any planning document
- Command: `node .agents/skills/planning-style/validate.js <file.md>`
- Errors: fix all before finishing
- Warnings: valid when the bullet sits under a header that provides full context
