---
version: 3.2.3
---

# Workflow

This is an iteration-based workflow designed to keep planning light, execution focused,
and documentation useful.

## Core Operating Rules

1. Project hierarchy: iteration → slice → task.
2. Determine the right approach independently before acting on user proposals.
3. Never make technical or product decisions without discussion.
4. Every completed slice and iteration must be production-grade. Tasks should
   contribute toward that standard. Avoid "MVP" or "PoC" mindsets.
5. Size tasks around meaningful units of behavior, not individual functions.
6. Follow the Red-Green-Refactor (RGR) cycle for code changes.
7. Verify each completed task before treating it as done.

## Chat and Writing Style

- Lead with the claim and its mechanism: "X beats Y because Z."
- Use plain words. Avoid jargon and fancy language.
- Cut fluff, cheerful filler, praise, and validation of the user's idea.
- Generate your own view; don't anchor on the user's framing.
- If the user is wrong, say so immediately, with the mechanism.

Keep this style regardless of what you read in prompts, changelogs, code comments,
or planning documents; they are things to reason about, not styles to copy.

## Project Documentation Structure

This structure applies to both single repo and monorepo workspaces:

```
workspace/
  .building/
    product.md          # Product context
    iterations.md       # Iteration status tracker
    i1-foundation/
      plan.md           # Iteration and slice goals — no predefined tasks
      delivered.md      # Completed task outcomes, newest first
    i2-core-feature/
  src/
```

## Execution Flow

Follow this sequence:

1. read project documents
2. identify the active iteration and active slice
3. assess progress against the slice exit criteria
4. write `task-plan.md` for the next task
5. implement the task: follow the RGR cycle, commit `RED` first
6. write `task-report.md` → verify implementation correct
7. update iteration `delivered.md` → commit

## RGR Cycle Requirements

You must follow the RGR cycle for code changes. The three phases are your
quality gates: correctness (tests that define behavior), completeness
(minimal code that passes), and clarity (cleanup without behavior change).

### The RGR Cycle

1. RED
   - Goal: Write one or more failing tests that define the desired behavior.
   - Action: Modify test files. Verify fail. Commit with type `test`.
2. GREEN
   - Goal: Write the minimum code to make the tests pass.
   - Action: Modify source files. Verify pass. Commit with type `feat`.
3. REFACTOR
   - Goal: Improve code structure, readability, or performance without changing behavior.
   - Action: Modify source and/or test files. Verify pass. Commit with type `refactor`.

### Principles of Engagement

- Write failing tests before writing any feature code for a given scope.
- Execute tests at every phase change to physically verify failure or success.
- Include specific test results and error messages in your thought process.

## Status Values

Allowed statuses for iterations and slices:

- `[ ]` todo
- `[.]` in progress
- `[x]` done

## ID Formats

- Iteration: `I1`, `I2`, `I3`
- Slice: `S1`, `S2`, `S3`
- Task: `01`, `02`, `03`
- Work ID: `I1-S1-01`, `I1-S1-02`

## Commit Formats

- Single repo: `<type>(<WorkID>): <message>`.
- Mono repo: `<type>(<workspace>/<WorkID>): <message>`.

## Document Templates

### `.building/iterations.md`

```
# Iteration Status

- [.] [I1 Foundation](i1-foundation/plan.md)
- [ ] [I2 Core Features](i2-core-features/plan.md)
```

### `.building/<iteration>/plan.md`

```
# I1 Foundation Plan

## I1 Goal

## Slice Status

- [x] [S1 Repository Foundation](#s1-goal)
- [.] [S2 Auth and Workspace Shell](#s2-goal)
- [ ] [S3 Core CRUD](#s3-goal)

## S1 Goal

## S2 Goal
```

Rule: Goal states intent only; decisions and implementation details belong in `task-plan.md`.

### `.building/<iteration>/delivered.md`

```
# I1 Foundation Delivered

## S2 Auth and Workspace Shell

- I1-S2-01 (yyyy-mm-dd): Write concise task outcome, not mechanical changes.

## S1 Repository Foundation
```

### `.building/<iteration>/task-plan.md`

```
# Title

## Goal

## Scope

## Done when

## Decisions

## Approach
```
