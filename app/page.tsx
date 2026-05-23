"use client";

import { useState } from "react";
import { generateTemplatePlan } from "../lib/generatePlan";

export default function Home() {
  const [assignmentName, setAssignmentName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [difficulty, setDifficulty] = useState("보통");
  const [availableTime, setAvailableTime] = useState("");
  const [copied, setCopied] = useState(false);
  const [plan, setPlan] = useState<string[]>([
    "과제 주제와 요구사항을 먼저 정리하세요.",
    "자료를 3개 이상 찾고 핵심 내용을 메모하세요.",
    "목차를 만든 뒤 가장 쉬운 부분부터 작성하세요.",
  ]);

 const generatePlan = () => {
   setCopied(false);

   const newPlan = generateTemplatePlan({
     assignmentName,
     deadline,
     difficulty,
     availableTime,
  });

  setPlan(newPlan);
};




  const copyPlan = async () => {
    const text = [
      `과제명: ${assignmentName || "미입력"}`,
      `마감일: ${deadline || "미입력"}`,
      `난이도: ${difficulty}`,
      `하루 가능 시간: ${availableTime || "미입력"}`,
      "",
      "실행 계획:",
      ...plan.map((item, index) => `${index + 1}. ${item}`),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
      alert("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-8 text-gray-900 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-3xl">
        <div className="mb-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-200">
          <p className="mb-3 text-sm font-semibold text-gray-500">
            AI Assignment Planner
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            과제쪼개기 AI
          </h1>
          <p className="mt-4 leading-7 text-gray-600">
            과제명, 마감일, 난이도, 하루 가능 시간을 입력하면 막연한 과제를
            바로 실행 가능한 작은 단계로 나눠줍니다.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">1. 입력</p>
              <p className="mt-1">과제 정보를 적습니다.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">2. 생성</p>
              <p className="mt-1">실행 계획을 만듭니다.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">3. 복사</p>
              <p className="mt-1">Notion이나 메모장에 붙여넣습니다.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">과제 정보 입력</h2>
            <p className="mt-2 text-sm text-gray-600">
              완벽하게 적지 않아도 됩니다. 일단 생각나는 만큼만 입력하세요.
            </p>

            <div className="mt-6 space-y-5">
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

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">실행 계획</h2>
                <p className="mt-2 text-sm text-gray-600">
                  오늘 바로 시작할 수 있는 단위로 나눈 결과입니다.
                </p>
              </div>

              <button
                onClick={copyPlan}
                className="shrink-0 rounded-xl border border-gray-300 px-3 py-2 text-sm font-medium transition hover:bg-gray-100"
              >
                복사
              </button>
            </div>

            <div className="mb-5 grid gap-2 text-sm sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-gray-500">마감일</p>
                <p className="font-medium text-gray-900">
                  {deadline || "미입력"}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-gray-500">난이도</p>
                <p className="font-medium text-gray-900">{difficulty}</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-3 sm:col-span-2">
                <p className="text-gray-500">하루 가능 시간</p>
                <p className="font-medium text-gray-900">
                  {availableTime || "미입력"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {plan.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                >
                  <p className="text-sm font-semibold text-gray-500">
                    STEP {index + 1}
                  </p>
                  <p className="mt-1 leading-7 text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            {copied && (
              <p className="mt-4 rounded-xl bg-gray-50 p-3 text-sm font-medium text-gray-700">
                복사 완료. Notion이나 메모장에 붙여넣을 수 있습니다.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}