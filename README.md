# 과제쪼개기 AI

마감일이 있는 과제를 입력하면, 오늘부터 무엇을 해야 할지 작게 쪼개주는 웹앱입니다.

## 배포 링크

https://taskbreaker-ai-one.vercel.app

## GitHub 저장소

https://github.com/choijiro/taskbreaker-ai

## 만든 목적

과제를 미루는 문제를 줄이기 위해 만들었습니다.  
과제명, 마감일, 난이도, 하루에 쓸 수 있는 시간을 입력하면 실행 가능한 작은 단위의 계획을 보여줍니다.

## 현재 기능

- 과제명 입력
- 마감일 입력
- 난이도 선택
- 하루에 쓸 수 있는 시간 입력
- 버튼 클릭 시 실행 계획 생성
- 입력값에 따라 더미 실행 계획 변경

## 사용 기술

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel

## 현재 버전

### v0.1

첫 번째 배포 버전입니다.

아직 실제 AI API는 연결하지 않았고, 입력값을 바탕으로 더미 실행 계획을 생성합니다.

## 다음 개발 예정

- OpenAI 또는 Gemini API 연결
- 실제 AI 기반 계획 생성
- 결과 복사 버튼 추가
- 모바일 UI 개선
- 과제 저장 기능 추가
- 로그인 기능 검토

## 제작 기록

2026년 5월 20일에 개발 환경 세팅부터 첫 배포까지 완료했습니다.

진행 내용:

1. GitHub, Vercel, Cursor 준비
2. Node.js, npm, Git 설치
3. Next.js 프로젝트 생성
4. 과제쪼개기 AI 첫 화면 제작
5. 입력값 기반 더미 계획 생성 기능 추가
6. GitHub 저장소 생성 및 코드 업로드
7. Vercel 배포 완료