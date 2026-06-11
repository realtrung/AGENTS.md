# AGENTS.md

A disciplined workflow for AI coding agents — iteration-based planning, test-driven execution, and lightweight documentation that persists across sessions.

## What it does

Five constraints that keep agents focused:

- **Iteration → Slice → Task hierarchy** — execute one task at a time.
- **Task proposal loop** — propose the next task, wait for confirmation, implement, then verify with a UAT checklist.
- **Slice run mode** — execute an entire slice end-to-end without per-task approvals when the slice has a settled design.
- **Test-Driven Development** — follow the Red-Green-Refactor cycle with separate commits for each phase.
- **`.building/` docs** — product context, iteration plans, status tracking, and changelogs.

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
