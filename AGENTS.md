---
version: 3.4.0
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
      plan.md           # Iteration and slice goals
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
5. implement the task: follow the RGR cycle, commit RED first
6. launch sub-agent review when the task changes system behavior
7. update and commit iteration `delivered.md`

### The RGR Cycle

You must follow the RGR cycle for code changes — the three phases are your
quality gates:

1. RED
   - Goal: Write one or more failing tests that define the desired behavior.
   - Action: Modify test files. Verify fail. Commit with type `test`.
2. GREEN
   - Goal: Write the minimum code to make the tests pass.
   - Action: Modify source files. Verify pass. Commit with type `feat`.
3. REFACTOR
   - Goal: Improve code structure, readability, or performance without changing behavior.
   - Action: Modify source and/or test files. Verify pass. Commit with type `refactor`.

Principles of engagement:

- Write failing tests before writing any feature code for a given scope.
- Execute tests at every phase change to physically verify failure or success.
- Include specific test results and error messages in your thought process.

## Sub-Agent Review

After REFACTOR, launch a sub-agent code review when the task changes system
behavior. Act on every finding before updating `delivered.md`.

## Conventions

Commit formats:

- Single repo: `<type>(<WorkID>): <message>`.
- Mono repo: `<type>(<workspace>/<WorkID>): <message>`.

ID formats:

- Iteration: `I1`, `I2`, `I3`
- Slice: `S1`, `S2`, `S3`
- Task: `01`, `02`, `03`
- Work ID: `I1-S1-01`, `I1-S2-02`

Status values:

- `[ ]` todo
- `[.]` in progress
- `[x]` done
