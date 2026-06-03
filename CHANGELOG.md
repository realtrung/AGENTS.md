# Changelog

Versions follow [SemVer](https://semver.org/): patch for wording fixes, minor for new rules, major for breaking changes to the workflow. Entries are ordered newest first.

## 2.2.1 (2026-06-03)

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
