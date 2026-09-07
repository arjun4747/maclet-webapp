# Architecture (Phase 1)

This MVP uses a Next.js App Router monolith with TypeScript.

- UI: `app/*`, `components/*`
- API routes: `app/api/*`
- Domain services: `lib/{github,analysis,skills,scoring,search}`
- Data layer: Prisma + PostgreSQL through `lib/db/prisma.ts`

Core flow:

1. Import GitHub username
2. Fetch public GitHub data server-side
3. Store normalized entities in PostgreSQL
4. Run deterministic analysis and scoring
5. Expose searchable recruiter-facing results
