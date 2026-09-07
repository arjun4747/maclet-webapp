import { z } from "zod";

export const importDeveloperSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1)
    .max(39)
    .regex(/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/, "Invalid GitHub username format"),
});

export type ImportDeveloperInput = z.infer<typeof importDeveloperSchema>;
