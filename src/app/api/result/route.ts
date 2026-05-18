import { NextRequest, NextResponse } from "next/server";
import { calculateResult, decodeResult } from "@/utils/calculate";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get("data");

  if (!data) {
    return NextResponse.json({ error: "Missing data parameter" }, { status: 400 });
  }

  const answers = decodeResult(data);

  if (!answers || answers.length === 0) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const result = calculateResult(answers);

  return NextResponse.json({
    personality: result.personality,
    dimensionScores: result.dimensionScores,
    matchPercentage: result.matchPercentage,
    timestamp: result.timestamp,
  });
}
