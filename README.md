# AGENTS.md

A disciplined workflow for AI coding agents — iteration-based planning, test-driven execution, and lightweight documentation that persists across sessions.

## What it does

Four constraints that keep agents focused:

- **Iteration → Slice → Task hierarchy** — plan at the iteration level, execute one task at a time.
- **Task proposal loop** — propose the next task, wait for confirmation, implement, then verify with a UAT checklist.
- **Test-Driven Development** — follow the Red-Green-Refactor cycle with separate commits for each phase.
- **`.building/` docs** — product context, design decisions, iteration specs, plans, and changelogs.

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
