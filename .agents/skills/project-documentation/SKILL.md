---
version: 1.0.0
name: project-documentation
description: Document templates — read before creating any planning artifact.
---

## Skimmable Lists for Planning Artifacts

Format planning artifacts as easy to skim lists — examples:

1. Use labeled bullets when the item is long

```
- Deployment: the service runs in a single region; multi-region is out of scope.
- Data retention: logs are kept for 30 days, then deleted automatically.
- Auth: all endpoints require a valid session; no anonymous access.
```

2. Use plain bullets for short items under a lead-in label

```
## Scope

IN:
- User registration and login
- Role-based access control
- Audit log for state-changing actions

OUT:
- Social sign-in
- Custom branding per tenant
- Real-time collaboration
```

3. Split long lists into smaller groups of 2-5 related items

```
## Constraints

Performance:
- Page load under 2 seconds on 3G.
- API responses under 200ms at p95.

Security:
- All secrets stored in a vault, never in config files.
- Dependencies scanned weekly for known vulnerabilities.

Budget:
- Infrastructure capped at $500/month.
- Third-party API costs tracked per environment.
- All spend reviewed monthly.
```

## Document Templates

1. `.building/iterations.md`

```
# Iteration Status

- [.] [I1 Foundation](i1-foundation/plan.md)
- [ ] [I2 Core Features](i2-core-features/plan.md)
```

2. `.building/<iteration>/plan.md`

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

3. `.building/<iteration>/delivered.md`

```
# I1 Foundation Delivered

## S2 Auth and Workspace Shell

- I1-S2-01 (yyyy-mm-dd): Write concise task outcome, not mechanical changes.

## S1 Repository Foundation
```

4. `.building/<iteration>/task-plan.md`

```
# Title

## Goal

## Scope

## Done when

## Decisions

## Approach
```
