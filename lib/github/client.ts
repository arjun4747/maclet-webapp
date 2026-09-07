import { GitHubApiError } from "@/lib/github/errors";
import type { GitHubRateLimit, GitHubRepository, GitHubUser } from "@/lib/github/types";

const GITHUB_BASE_URL = "https://api.github.com";
const DEFAULT_PER_PAGE = 100;

function getGitHubToken(): string {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("Missing GITHUB_TOKEN environment variable.");
  }
  return token;
}

async function githubFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getGitHubToken();

  const response = await fetch(`${GITHUB_BASE_URL}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `******
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as
      | { message?: string; documentation_url?: string }
      | null;

    const message =
      response.status === 401
        ? "GitHub authentication failed. Check GITHUB_TOKEN."
        : response.status === 403
          ? "GitHub request blocked or rate limited."
          : body?.message ?? "GitHub API request failed.";

    throw new GitHubApiError(message, response.status, body?.documentation_url);
  }

  return (await response.json()) as T;
}

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  return githubFetch<GitHubUser>(`/users/${encodeURIComponent(username)}`);
}

export async function getGitHubUserRepositories(username: string): Promise<GitHubRepository[]> {
  const repositories: GitHubRepository[] = [];
  let page = 1;

  while (true) {
    const batch = await githubFetch<GitHubRepository[]>(
      `/users/${encodeURIComponent(username)}/repos?per_page=${DEFAULT_PER_PAGE}&page=${page}&sort=updated`,
    );

    repositories.push(...batch);

    if (batch.length < DEFAULT_PER_PAGE) {
      break;
    }

    page += 1;
  }

  return repositories;
}

export async function getGitHubRateLimit(): Promise<GitHubRateLimit> {
  const data = await githubFetch<{ resources: { core: GitHubRateLimit } }>("/rate_limit");
  return data.resources.core;
}
