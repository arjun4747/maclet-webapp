# Proof-of-Work Developer Discovery Platform

Recruiter-facing platform MVP that discovers developers from public GitHub proof-of-work signals instead of resume-only claims.

## Current status

This repository is in **Phase 1**:

- Next.js App Router + TypeScript initialized
- Tailwind CSS configured
- Prisma PostgreSQL schema baseline created
- Core architecture folders scaffolded
- GitHub API client skeleton added
- Core recruiter routes and API placeholders scaffolded

## Architecture summary

GitHub Public API → Import Pipeline → PostgreSQL (Prisma) → Analysis Engine → Skill Detection → Explainable Scoring → Search & Ranking → Recruiter Dashboard → Developer Profile

See:

- `/docs/architecture.md`
- `/docs/scoring.md`
- `/docs/github-api.md`

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Zod
- Vitest

## Environment variables

Copy `.env.example` to `.env` and configure:

- `DATABASE_URL`
- `GITHUB_TOKEN`
- `NEXT_PUBLIC_APP_NAME`
- `DEMO_MODE`
- `IMPORT_RATE_LIMIT_PER_MINUTE`
- `LOG_LEVEL`

## Setup

```bash
npm install
npm run prisma:generate
npm run dev
```

## Quality checks

```bash
npm run test
npm run lint
npm run typecheck
```

## Notes

- Scores are evidence-based signals, not absolute judgments of ability.
- GitHub stars and commit counts are not treated as direct skill equivalence.
- `GITHUB_TOKEN` is server-side only and must never be exposed to client code.
