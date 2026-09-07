export interface AnalysisPipelineInput {
  githubUsername: string;
}

export interface AnalysisPipelineOutput {
  githubUsername: string;
  status: "PENDING_PHASE_3";
}

export async function runAnalysisPipeline(
  input: AnalysisPipelineInput,
): Promise<AnalysisPipelineOutput> {
  return {
    githubUsername: input.githubUsername,
    status: "PENDING_PHASE_3",
  };
}
