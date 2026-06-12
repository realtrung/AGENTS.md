---
version: 1.0.0
name: planning-style
description: Writing style for all planning documents in this repository. Read before
  writing or editing any planning artifact.
---

# Planning Artifact Writing Style

## Core Rules

- Write plainly: use simple, direct language — avoid jargon and technical
  density that obscures the intent.
- Be skimmable: structure planning docs so a reader can quickly skim through
  goals, scope, decisions, risks, etc — avoid wall of text.
- Prefer labeled bullets: use `Label: detail` to make items quick to scan.

## Best Practices

1. Use labeled bullets when the item is long:

```example
- Deployment: the service runs in a single region; multi-region is out of scope.
- Data retention: logs are kept for 30 days, then deleted automatically.
- Auth: all endpoints require a valid session; no anonymous access.
```

2. Plain bullets work best for short items under a lead-in label:

```example
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

3. Long lists should be split into smaller groups of 2-5 related items:

```example
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
