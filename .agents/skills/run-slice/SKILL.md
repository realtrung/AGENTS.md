---
version: 1.0.2
name: run-slice
description: When the user says "Run this slice", implement the active slice from start to finish, no per-task approvals. Read before starting the loop, and re-read before proceeding with the next task to ensure workflow adherence.
---

# Run Slice

When asked `Run this slice`, implement the active slice from start to finish. Follow the repository's workflow, except that per-task approvals are skipped.

## Execution Loop

1. write `task-plan.md`
2. RED: modify test files → verify fail → commit
3. GREEN: modify source files → verify pass → commit
4. REFACTOR: modify source and/or test files → verify pass → commit
5. write `task-uat.md` → verify implementation correct
6. update iteration `delivered.md` → commit
7. next task

Loop until the slice exit criteria are met or a stop condition is hit.

Close by marking the slice `[x]` in `plan.md` and updating iteration status in `iterations.md`. Commit, then write `slice-report.md`.

## Stop Conditions

- A product or technical decision arises that the design does not resolve.
- The test suite cannot be brought back to green within the current task's scope.
- Continuing would require a destructive or irreversible action.

## Slice Report

```md
# S<N> <Slice Name> Report

## Delivered

## Emergent Decisions

## Caveats
```
