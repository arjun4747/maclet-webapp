export interface GitHubUser {
  id: number;
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  avatar_url: string;
  html_url: string;
  blog: string;
  followers: number;
  public_repos: number;
  created_at: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  size: number;
  default_branch: string;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  license: { spdx_id: string | null } | null;
}

export interface GitHubRateLimit {
  limit: number;
  remaining: number;
  reset: number;
}
