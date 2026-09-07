# GitHub API Integration (Phase 1 baseline)

The app uses the official GitHub REST API through `lib/github/client.ts`.

Implemented baseline capabilities:

- Lookup developer profile by username
- Paginate repositories (`per_page=100`)
- Read rate limit information
- Normalize error handling through `GitHubApiError`

Safety constraints:

- `GITHUB_TOKEN` is server-only
- No token exposure to client code
- No scraping when official endpoints are available
- Rate-limit behavior surfaced through explicit errors
