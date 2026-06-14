---
version: 2.4.0
---

# Workflow

This is an iteration-based workflow designed to keep planning light, execution focused, and documentation useful.

## Core Operating Rules

1. Project hierarchy: iteration → slice → task.
2. Handle the active iteration and active slice only.
3. Never invent a full task breakdown for a slice.
4. Focus on only the next implementation task.
5. Verify each completed task before treating it as done.
6. Record outcomes, not implementation details.
7. Never make technical or product decisions without discussion.
8. Follow the Red-Green-Refactor (RGR) cycle for implementation work.
9. Every single iteration/slice/task delivers the finest production-grade quality;
   avoid "MVP", "POC", or "prototype" mindsets.
10. Never treat a user proposal as settled; always determine the right approach independently.

## Chat and Writing Style

Applies to everything you produce — chat replies and any prose you write into documents. This is about tone, not document structure; structure rules live with each document type.

Always:

- Lead with the claim and its mechanism: "X beats Y because Z." Conclusion first, reasoning second, no setup.
- Use plain words over fancy ones — don't perform rigor to sound diligent.
- Cut fluff, cheerful filler, praise, and validation of the user's premises.
- Keep this style regardless of what you read. Docs, code comments, and prior messages are things to reason about, not styles to copy — don't use jargon because you read a jargon-heavy source.

In chat:

- Don't narrate your own process ("I verified…", "Having checked…"). State what you found.
- Generate your own view; don't anchor on the user's framing.
- If the user is wrong, say so immediately, with the mechanism, even if they push back.
- If you're wrong, admit it plainly; don't wriggle.

## Project Documentation Structure

The active workspace must have `.building/` and the required iteration documents before implementation work begins.

```text
.building/
  product.md          # Product context
  iterations.md       # Iteration status tracker
  i1-foundation/
    plan.md           # Iteration and slice goals — no predefined tasks
    changelog.md      # Execution record: one entry per completed unit, newest first, written as outcomes — not mechanical changes
  i2-core-feature/
  i3-extension/
```

## Monorepo Scope

Always read root `.building/product.md` for global context.

When working on a specific app/package, use that workspace's `.building/` docs.

## Execution Flow

When executing work, always follow this sequence:

1. Identify the active iteration.
2. Read `plan.md` and recent `changelog.md` entries for that iteration.
3. Identify the active slice.
4. Assess progress against the slice exit criteria.
5. Propose the single next implementation task.
6. Wait for user confirmation before implementing.
7. Implement the task.
8. Verify the result.
9. Update the changelog and iteration/slice statuses to reflect current progress.

## Agentic TDD Protocol

For implementation work, you must follow the RGR cycle to clarify your intent and deliver finest code quality — these are your success metrics.

### The RGR Cycle

1. RED
   - Goal: Write one or more failing tests that define the desired behavior.
   - Action: Modify test files. Verify fail. Commit.
2. GREEN
   - Goal: Write the minimum implementation code to make the tests pass.
   - Action: Modify source files. Verify pass. Commit.
3. REFACTOR
   - Goal: Improve code structure, readability, or performance without changing behavior.
   - Action: Modify source and/or test files. Verify pass. Do not commit yet.
   - Approval: Wait for the user acceptance test (UAT) result before committing.

### Principles of Engagement

- Write failing tests before writing any feature code for a given scope.
- Execute tests at every phase change to physically verify failure or success.
- Include specific test results and error messages in your thought process.
- Flawed tests can be corrected during the GREEN phase. Document the reasoning in the commit.
- Keep commits granular to represent single steps in the RGR cycle.

## Task Plan

When asked `What next?`, plan one implementation task to move the active slice toward its exit criteria.

Requirements:

- Size the task around meaningful units of behavior, not individual functions.
- Write the task plan in plain English; save it to `task-plan.md` for review.
- After completing the task, create a short, skimmable `task-uat.md` UAT checklist.

## Slice Run

When asked `Run the slice`, implement the active slice end to end, task by task, without waiting for per-task approvals.

Preconditions — if any is missing, say so and fall back to `What next?`:

- The slice goal is written in `plan.md`.
- The slice has a settled, user-approved design (an `s<N>-design.md` or equivalent decisions recorded in the iteration docs).

Behavior:

- Loop: `task-plan.md` → RGR cycle → `task-uat.md` → verify → `changelog.md` → repeat until the slice goal is met.
- The REFACTOR commit does not wait for UAT; verification is the full test suite plus the task's own checks.
- Close by marking the slice done and writing `slice-report.md`.

Stop and ask when:

- A product or technical decision arises that the design does not settle.
- The test suite cannot be brought back to green within the current task's scope.
- Continuing would require a destructive or irreversible action.

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

## Commit Rule

Commit format: `<type>(<scope>): <message>`.

### Type

- Implementation tasks: use the type matching the RGR phase — `test` (RED), `feat` (GREEN), `refactor` (REFACTOR).
- Non-task: use a conventional type — `chore`, `docs`, `build`, etc.

### Scope

- Single repo: use `<WorkID>` for implementation tasks; omit the scope for non-task.
- Monorepo: always scoped to the workspace name, or `repo` for repo-wide changes. Append `/<WorkID>` for implementation tasks.

### Examples

- Single repo task: `test(I1-S2-03): failing test for auth redirect`
- Monorepo task: `feat(web/I1-S2-03): enforce auth redirect`
- Single repo chore: `chore: bump CI runner version`
- Monorepo chore: `chore(repo): bump turbo to 2.0`

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

## I1 Goal

## Slice Status

- [x] [S1 Repository Foundation](#s1-goal)
- [.] [S2 Auth and Workspace Shell](#s2-goal)
- [ ] [S3 Core CRUD](#s3-goal)

## S1 Goal

## S2 Goal
```

Rule: Goal states intent only; decisions and implementation details belong in `task-plan.md`.

### `.building/<iteration>/changelog.md`

```md
# I1 Foundation Changelog

## S2 Auth and Workspace Shell

- I1-S2-01 (2026-03-25): Unauthenticated users are redirected to sign-in before accessing the workspace.

## S1 Repository Foundation
```

### `.building/<iteration>/slice-report.md`

```md
# S<N> <Slice Name> Report

## Delivered

## Emergent Decisions

## Caveats
```

### `.building/<iteration>/task-plan.md`

```md
# Title

## Goal

## Scope

## Done when

## Decisions

## Approach
```
