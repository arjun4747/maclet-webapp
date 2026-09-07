export interface SearchFilters {
  technology?: string;
  location?: string;
  minScore?: number;
  recentActivityDays?: number;
  skillConfidence?: "STRONG" | "MODERATE" | "LIMITED";
}

export function normalizeSearchFilters(filters: SearchFilters): SearchFilters {
  return {
    ...filters,
    technology: filters.technology?.trim() || undefined,
    location: filters.location?.trim() || undefined,
  };
}
