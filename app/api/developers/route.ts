import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: "Developer listing API will be implemented in Phase 4.",
      items: [],
    },
    { status: 501 },
  );
}
