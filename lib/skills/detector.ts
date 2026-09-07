export type SkillEvidenceLevel = "STRONG" | "MODERATE" | "LIMITED";

export interface DetectedSkill {
  name: string;
  level: SkillEvidenceLevel;
  evidence: string[];
}

export function detectSkills(): DetectedSkill[] {
  return [];
}
