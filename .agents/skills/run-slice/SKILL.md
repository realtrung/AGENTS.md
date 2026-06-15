---
version: 1.3.1
name: run-slice
description: When the user says "Run this slice", implement the active slice from start to
  finish, task by task. Read before starting the loop, and re-read before proceeding with
  the next task to ensure workflow adherence.
---

# Run Slice

When triggered, implement the active slice from start to finish, task by task,
following the RGR cycle.

## Precondition

The slice must have an `s<N>-plan.md` document, recorded in the iteration plan.

If the precondition is not met, do not start the Execution Loop.

## Execution Loop

1. write `task-plan.md`
2. RED: modify test files → verify fail → commit `test`
3. GREEN: modify source files → verify pass → commit `feat`
4. REFACTOR: modify source and/or test files → verify pass → commit `refactor`
5. write `task-report.md` → verify implementation correct
6. update iteration `delivered.md` → commit
7. next task

## Principles of Engagement

- Size each task around a meaningful unit of behavior, not individual functions.
- Loop until the slice exit criteria are met or a stop condition is hit.
- Close the slice by flipping its state in `plan.md`. Commit, then write
  `slice-report.md`. Never flip iteration status as a side effect of slice-close.

## Stop Conditions

- A product or technical decision arises that the design does not resolve.
- The test suite cannot be brought back to green within the current task's scope.
- Continuing would require a destructive or irreversible action.

## `.building/<iteration>/slice-report.md`

```md
# S<N> <Slice Name> Report

## Delivered

## Emergent Decisions

## Caveats
```
