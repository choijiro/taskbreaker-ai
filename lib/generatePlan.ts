type GeneratePlanInput = {
  assignmentName: string;
  deadline: string;
  difficulty: string;
  availableTime: string;
};

export function generateTemplatePlan({
  assignmentName,
  deadline,
  difficulty,
  availableTime,
}: GeneratePlanInput) {
  if (!assignmentName.trim()) {
    return ["먼저 과제명을 입력해 주세요."];
  }

  return [
    `"${assignmentName}" 과제의 요구사항을 10분 안에 정리하기`,
    "필요한 자료를 3개 이상 찾고 핵심 내용을 메모하기",
    "목차를 만들고 가장 쉬운 부분부터 작성하기",
    `${difficulty} 난이도 기준으로 작업을 더 작은 단위로 나누기`,
    availableTime
      ? `매일 ${availableTime} 안에 끝낼 수 있는 만큼만 진행하기`
      : "하루 최소 25분만 시작하기",
    deadline
      ? `${deadline} 전까지 초안 작성 → 수정 → 최종 제출 순서로 진행하기`
      : "마감일을 입력하면 더 구체적인 일정으로 나눌 수 있습니다.",
  ];
}