# 매주 할 일 (WEEKLY)

## 금요일 · 영어 단어장 반영
1. **(직접)** 폴리에서 받은 단어 정리본(A4)을 아이별로 사진 찍어 채팅에 올리고 "이번 주 영어 단어 반영해줘"라고 말한다. 누구 것인지 같이 적는다 (룰루 / 랄라).
2. **(채팅)** Claude가 `data/english.js`에서 그 아이의 `words`를 통째로 바꾸고, `week`에 날짜나 단원 이름을 적는다. 뜻과 짧은 예문은 Claude가 붙인다.
3. **(채팅)** "올려줘" → GitHub에 올리면 1~2분 뒤 패드에 반영.

단어장이 없는 주에는 지금 들어 있는 교재 단원 단어가 그대로 쓰인다.

### 지금 들어 있는 것 (2026-11-11)
| 아이 | 폴리 레벨 | 교재 | 단어 | 출처 |
|---|---|---|---|---|
| 룰루 | GT1 (미국 1학년) | Journeys Ready to Roll · Unit 2 (R&V) | Lesson 6~10 Words to Know 26개 | HMH Journeys Grade 1 교사 자료(학교 공개 목록) |
| 랄라 | GT2 (미국 2학년) | Wonders Set Sail · Unit 2 (TB, R&V) | Unit 2 High-Frequency Words 50개(주별 10개) | McGraw-Hill Wonders Grade 2 공식 Scope & Sequence |

폴리 레벨 GT1·GT2는 미국 학년 기준이다 (GT1 = Grade 1, GT2 = Grade 2). 단어장과 다르면 그 주에 바로 고친다.

## 받아쓰기 급수 바꾸기
- "받아쓰기 4급으로 바꿔줘" → `data/dictation.js`의 `current` 숫자만 바뀐다.
- 학교 급수표 사진을 주면 "학교 급수표 N급 반영해줘" → 그 급 문장 10개를 교체한다.

## 문제 보태기
- "공룡 문제 10개 더 넣어줘", "위인 퀴즈에 ○○ 넣어줘" → `data/quiz.js` 해당 묶음에 추가 (정답은 첫 보기).
- "카드 더 만들어줘" → `data/cards.js`에 추가. 세트를 새로 만들면 배지 조건도 같이 추가.
