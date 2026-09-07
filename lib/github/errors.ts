export class GitHubApiError extends Error {
  public readonly status: number;
  public readonly documentationUrl?: string;

  constructor(message: string, status: number, documentationUrl?: string) {
    super(message);
    this.name = "GitHubApiError";
    this.status = status;
    this.documentationUrl = documentationUrl;
  }
}
