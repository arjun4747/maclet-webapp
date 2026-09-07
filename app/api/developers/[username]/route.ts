import { NextResponse } from "next/server";

interface DeveloperRouteContext {
  params: Promise<{ username: string }>;
}

export async function GET(_: Request, context: DeveloperRouteContext) {
  const { username } = await context.params;

  return NextResponse.json(
    {
      message: "Developer profile API will be implemented in Phase 4.",
      username,
    },
    { status: 501 },
  );
}
