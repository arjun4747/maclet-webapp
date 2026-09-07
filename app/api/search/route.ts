import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: "Structured search API will be implemented in Phase 4.",
      results: [],
    },
    { status: 501 },
  );
}
