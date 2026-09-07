import { describe, expect, it } from "vitest";

import { calculateOverallScore, SCORE_WEIGHTS } from "../lib/scoring/weights";

describe("score weights", () => {
  it("sums to 1.0", () => {
    const total = Object.values(SCORE_WEIGHTS).reduce((sum, value) => sum + value, 0);
    expect(total).toBeCloseTo(1, 5);
  });

  it("calculates deterministic weighted score", () => {
    const overall = calculateOverallScore({
      activity: 90,
      consistency: 80,
      contributionDepth: 70,
      projectQuality: 85,
      openSource: 60,
    });

    expect(overall).toBe(78);
  });
});
