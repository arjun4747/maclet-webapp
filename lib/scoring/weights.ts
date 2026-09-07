export const SCORE_WEIGHTS = {
  activity: 0.2,
  consistency: 0.2,
  contributionDepth: 0.25,
  projectQuality: 0.2,
  openSource: 0.15,
} as const;

export type ScoreDimension = keyof typeof SCORE_WEIGHTS;

export function calculateOverallScore(scores: Record<ScoreDimension, number>): number {
  const weighted =
    scores.activity * SCORE_WEIGHTS.activity +
    scores.consistency * SCORE_WEIGHTS.consistency +
    scores.contributionDepth * SCORE_WEIGHTS.contributionDepth +
    scores.projectQuality * SCORE_WEIGHTS.projectQuality +
    scores.openSource * SCORE_WEIGHTS.openSource;

  return Math.round(weighted);
}
