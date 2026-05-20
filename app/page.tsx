"use client";

import { useState } from "react";

export default function Home() {
  const [assignmentName, setAssignmentName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [difficulty, setDifficulty] = useState("보통");
  const [availableTime, setAvailableTime] = useState("");
  const [plan, setPlan] = useState<string[]>([
    "오늘: 과제 주제와 요구사항을 정리하기",
    "내일: 자료 3개 이상 찾고 목차 만들기",
    "마감 전: 초안 작성 후 검토하기",
  ]);

  const generatePlan = () => {
    if (!assignmentName.trim()) {
      setPlan(["먼저 과제명을 입력해 주세요."]);
      return;
    }

    const newPlan = [
      `오늘: "${assignmentName}" 과제의 요구사항을 10분 안에 정리하기`,
      `1단계: 필요한 자료를 3개 이상 찾고 핵심 내용을 메모하기`,
      `2단계: 목차를 만들고 가장 쉬운 부분부터 작성하기`,
      `3단계: ${difficulty} 난이도 기준으로 작업을 작게 나누기`,
      availableTime
        ? `매일 작업 기준: ${availableTime} 안에 끝낼 수 있는 만큼만 진행하기`
        : "매일 작업 기준: 최소 25분만 시작하기",
      deadline
        ? `마감일 ${deadline} 전까지 초안 작성 → 수정 → 최종 제출 순서로 진행하기`
        : "마감일을 입력하면 더 구체적인 일정으로 나눌 수 있습니다.",
    ];

    setPlan(newPlan);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            AI Assignment Planner
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            과제쪼개기 AI
          </h1>
          <p className="mt-3 text-gray-600">
            마감일이 있는 과제를 입력하면, 오늘부터 무엇을 해야 할지 작게 쪼개드립니다.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">과제명</label>
              <input
                type="text"
                value={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
                placeholder="예: 해양법 레포트 작성"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">마감일</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">난이도</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              >
                <option>쉬움</option>
                <option>보통</option>
                <option>어려움</option>
                <option>매우 어려움</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                하루에 쓸 수 있는 시간
              </label>
              <input
                type="text"
                value={availableTime}
                onChange={(e) => setAvailableTime(e.target.value)}
                placeholder="예: 하루 1시간"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
              />
            </div>

            <button
              onClick={generatePlan}
              className="w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-700"
            >
              계획 생성하기
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="mb-4 text-xl font-bold">실행 계획</h2>
          <ul className="space-y-3 text-gray-700">
            {plan.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}