import { NextResponse } from "next/server";
import { generateTemplatePlan } from "../../../lib/generatePlan";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const plan = generateTemplatePlan({
      assignmentName: body.assignmentName ?? "",
      deadline: body.deadline ?? "",
      difficulty: body.difficulty ?? "보통",
      availableTime: body.availableTime ?? "",
    });

    return NextResponse.json({ plan });
  } catch {
    return NextResponse.json(
      { error: "계획 생성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}