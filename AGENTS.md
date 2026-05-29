# Workflow

An iteration-based workflow designed to keep planning light, execution focused, and documentation useful.

## Core Operating Rules

1. Project hierarchy: iteration → slice → task.
2. Every iteration delivers the finest production-grade quality; avoid "MVP", "POC", or "prototype" mindsets.
3. Plan at the iteration level, not at the task-list level.
4. Handle the active iteration and active slice only.
5. Never invent a full task breakdown for a slice.
6. Focus on only the next implementation task.
7. For light work, a slice may consist of a single implementation task.
8. Verify each completed task before treating it as done.
9. Record outcomes, not implementation details.
10. Never make technical or product decisions without discussion.
11. Follow the Red-Green-Refactor (RGR) cycle for implementation work.

## Communication Style

- Keep your answers short and concise.
- Put the punchline in the first sentence.
- No fluff or cheerful filler text; technical prose only.
- Do not praise my questions or validate my premises.
- Avoid polite hedging or opinion-based preambles.
- Call out bad news and technical flaws directly.
- If I'm wrong, say so immediately even if I push back.
- If you're wrong, don't try to wriggle out of being wrong.
- Do not anchor on my ideas; generate yours independently.
- Use explicit confidence levels for assessments.

## Project Documentation Structure

The active workspace must have `.building/` and the required iteration documents before implementation work begins.

```text
.building/
  product.md
  design.md
  iterations.md
  i1-foundation/
    spec.md
    plan.md
    changelog.md
  i2-core-feature/
  i3-extension/
```

### `.building/product.md`

Defines product context, goals, and business intent.

### `.building/design.md`

Defines guidelines for UI (e.g., layout, typography, and colors) or technical design (e.g., backend module architecture, API design patterns).

### `.building/iterations.md`

Tracks iteration status across the project.

### `.building/<iteration>/spec.md`

Defines what the iteration must achieve.

Must include:

- objective
- user or business outcome
- constraints
- non-goals
- success criteria

This is the source of truth for iteration scope.

### `.building/<iteration>/plan.md`

Defines the implementation approach for the iteration.

Must include:

- overview
- iteration decisions
- slice status list
- slice definitions
- slice-specific decisions when needed

Do not predefine implementation tasks for slices.

### `.building/<iteration>/changelog.md`

A record of execution for the iteration.

Purpose:

- preserve meaningful implementation history
- keep the current state obvious
- help determine the next task

Add one entry for each completed unit of work, ordered newest first.

Write each entry as a direct, concise outcome, not the mechanical change.

## Monorepo Scope

Each app or package owns its own `.building/` folder for execution work.

1. Always read root `.building/product.md` and `.building/design.md` for global context.
2. When working on a specific app/package, use that workspace's `.building/` docs.
3. If no app/package is clear, explicitly ask which workspace to use.

## Execution Flow

When executing work, always follow this sequence:

1. Identify the active iteration.
2. Read `spec.md`, `plan.md`, and recent `changelog.md` entries for that iteration.
3. Identify the active slice.
4. Assess progress against the slice exit criteria.
5. Propose the single next implementation task.
6. Wait for user confirmation before implementing.
7. Implement the task.
8. Verify the result.
9. Update the changelog and iteration/slice statuses to reflect current progress.

## Agentic TDD Protocol

For implementation work, you must follow the RGR cycle to clarify your intent and deliver finest code quality—they are your success metrics.

### The RGR Cycle

1. RED
   - Goal: Write one or more failing tests that define the desired behavior.
   - Action: Modify test files. Verify fail. Commit.
2. GREEN
   - Goal: Write the minimum implementation code to make the tests pass.
   - Action: Modify source files. Verify pass. Commit.
3. REFACTOR
   - Goal: Improve code structure, readability, or performance without changing behavior.
   - Action: Modify source and/or test files. Verify pass. Do not commit.
   - Approval: Wait for user acceptance test result.

### Principles of Engagement

- Write failing tests before writing any feature code for a given scope.
- Execute tests at every phase change to physically verify failure or success.
- Include specific test results and error messages in your thought process.
- Flawed tests can be corrected during the green phase. Document the reasoning in the commit.
- Keep commits granular to represent single steps in the RGR cycle.

## Task Proposal

When asked `What next?`, propose one implementation task that moves the active slice toward its exit criteria.

Write task proposals in plain English. Use concise, direct sentences that are easy to skim.

Task documentation:

- Save the task plan to a file under `docs/` for review.
- After completing the task, create a short, skimmable UAT checklist.

## Double-Check

When prompted with `Double-check!`, review the work from the current session for completeness.

For a task proposal, review the plan with fresh eyes and identify anything that should be clarified or decided before implementation begins.

## Status Values

Allowed statuses for iterations and slices:

- `[ ]` todo
- `[.]` in progress
- `[x]` done
- `[?]` blocked
- `[-]` cancelled

## ID Formats

- Iteration: `I1`, `I2`, `I3`
- Slice: `S1`, `S2`, `S3`
- Task: `01`, `02`, `03`
- Work ID: `I1-S1-01`, `I1-S1-02`

## Commit Rule

Remove temporary documents, including the task proposal and the UAT checklist, before committing.

Use the Work ID as the scope in the commit message for implementation tasks.

Commit format:

- Red Phase: `test(I1-S2-03): failing test for auth redirect`
- Green Phase: `feat(I1-S2-03): enforce auth redirect`
- Refactor Phase: `refactor(I1-S2-03): clean up redirect logic`
- Other: `chore: update CI config`, `docs: add auth module README`

## Document Templates

### `.building/iterations.md`

```md
# Iteration Status

- [.] [I1 Foundation](i1-foundation/plan.md)
- [ ] [I2 Core Features](i2-core-features/plan.md)
- [ ] [I3 Advanced Tools](i3-advanced-tools/plan.md)
```

### `.building/<iteration>/plan.md`

```md
# I1 Foundation Plan

## Overview

## Iteration Decisions

## Slice Status

- [x] [S1 Repository Foundation](#s1-repository-foundation)
- [.] [S2 Auth and Workspace Shell](#s2-auth-and-workspace-shell)
- [ ] [S3 Core CRUD](#s3-core-crud)

## S1 Repository Foundation

### Goal

### Scope

### Non-goals

### Dependencies

### Exit Criteria

### Slice Decisions
```

### `.building/<iteration>/changelog.md`

```md
# I1 Foundation Changelog

- I1-S2-03 (2026-03-25): Unauthenticated users are redirected to sign-in before accessing the workspace.
```

### Task Proposal

```md
# Title

## Goal

## Scope

## Done when

## Decisions

## Approach
```
