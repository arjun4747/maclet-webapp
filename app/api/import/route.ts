import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "Developer import pipeline will be implemented in Phase 2.",
    },
    { status: 501 },
  );
}
