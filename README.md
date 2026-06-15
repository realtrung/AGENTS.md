# AGENTS.md

A disciplined workflow for AI coding agents — iteration-based planning, test-driven execution, and lightweight documentation that persists across sessions.

## What it does

Five constraints that keep agents focused:

- **Iteration → Slice → Task hierarchy** — work flows top-down; one task at a time.
- **Autonomous execution loop** — write `task-plan.md`, implement, write `task-report.md`, update `delivered.md`; no per-task approval gates.
- **Slice run mode** — the `run-slice` skill executes an entire slice end-to-end, task by task, following the RGR cycle.
- **Test-Driven Development** — follow the Red-Green-Refactor cycle with typed commits (`test`, `feat`, `refactor`) for each phase.
- **`.building/` docs** — product context, iteration plans, status tracking, and delivered outcomes.

## Quick start

```bash
curl -O https://raw.githubusercontent.com/realtrung/agents.md/main/AGENTS.md
```

For Claude Code, symlink it:

```bash
ln -s AGENTS.md CLAUDE.md
```

## The spec

Read the full workflow: [AGENTS.md](AGENTS.md)

## License

[CC0 1.0](LICENSE)
