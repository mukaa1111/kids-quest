// 영어 단어 — 아이별로 따로. kids[0]은 첫째(룰루), kids[1]은 둘째(랄라). 화면의 대원 순서와 같아요.
// book: 폴리 교재, unit: 지금 단원, week: 단어장 이름, words: { en 영어, ko 뜻, ex 짧은 예문 }
// 출처: 룰루 = HMH Journeys Grade 1 Unit 2 (Lesson 6~10) Words to Know
//       랄라 = McGraw-Hill Wonders Grade 1 Unit 2 "Our Community" High-Frequency Words (공식 scope & sequence)
// 폴리 단어장(A4) 사진을 주면 그 아이의 words를 그 주 단어로 바꿉니다.
window.ENGLISH = {
  kids: [
    {
      name: "룰루",
      book: "Journeys Ready to Roll · Unit 2 (Reading & Vocabulary)",
      unit: "Unit 2 · Lesson 6~10",
      week: "Unit 2 Words to Know (26단어)",
      words: [
        // Lesson 6 Jack and the Wolf
        { en: "away", ko: "멀리, 떨어져", ex: "The wolf ran away." },
        { en: "call", ko: "부르다", ex: "Call your mom." },
        { en: "come", ko: "오다", ex: "Come here!" },
        { en: "every", ko: "모든", ex: "I read every day." },
        { en: "hear", ko: "듣다", ex: "I hear a bird." },
        { en: "said", ko: "말했다", ex: "She said hello." },
        // Lesson 7 How Animals Communicate
        { en: "animal", ko: "동물", ex: "A dog is an animal." },
        { en: "how", ko: "어떻게", ex: "How are you?" },
        { en: "of", ko: "~의", ex: "A cup of milk." },
        { en: "some", ko: "약간의, 몇몇의", ex: "I want some water." },
        { en: "why", ko: "왜", ex: "Why are you sad?" },
        // Lesson 8 A Musical Day
        { en: "her", ko: "그녀의, 그녀를", ex: "This is her hat." },
        { en: "now", ko: "지금", ex: "Let's go now." },
        { en: "today", ko: "오늘", ex: "Today is Monday." },
        { en: "would", ko: "~할 것이다, ~하고 싶다", ex: "I would like a cookie." },
        // Lesson 9 Dr. Seuss
        { en: "was", ko: "~였다", ex: "It was fun." },
        { en: "after", ko: "~후에", ex: "After school, we play." },
        { en: "read", ko: "읽다", ex: "I read a book." },
        { en: "pictures", ko: "그림들, 사진들", ex: "I draw pictures." },
        { en: "write", ko: "쓰다", ex: "Write your name." },
        // Lesson 10 A Cupcake Party
        { en: "eat", ko: "먹다", ex: "Let's eat lunch." },
        { en: "give", ko: "주다", ex: "Give me the ball." },
        { en: "one", ko: "하나", ex: "I have one cat." },
        { en: "put", ko: "놓다, 두다", ex: "Put it on the desk." },
        { en: "small", ko: "작은", ex: "A small cupcake." },
        { en: "take", ko: "가져가다, 잡다", ex: "Take one cookie." }
      ]
    },
    {
      name: "랄라",
      book: "Wonders Set Sail · Unit 2 (Textbook, Reading & Vocabulary)",
      unit: "Unit 2 · Our Community",
      week: "Unit 2 High-Frequency Words (25단어)",
      words: [
        // Week 1 Jobs Around Town
        { en: "again", ko: "다시", ex: "Say it again." },
        { en: "help", ko: "돕다", ex: "Help me, please." },
        { en: "new", ko: "새로운", ex: "I have new shoes." },
        { en: "there", ko: "거기에", ex: "Put it there." },
        { en: "use", ko: "사용하다", ex: "Use a pencil." },
        // Week 2 Buildings All Around
        { en: "could", ko: "~할 수 있었다", ex: "I could see the moon." },
        { en: "live", ko: "살다", ex: "I live in Daejeon." },
        { en: "one", ko: "하나", ex: "One, two, three!" },
        { en: "then", ko: "그다음에", ex: "First eat, then play." },
        { en: "three", ko: "셋, 3", ex: "I have three pens." },
        // Week 3 A Community in Nature
        { en: "eat", ko: "먹다", ex: "Cows eat grass." },
        { en: "no", ko: "아니요, 없는", ex: "No, thank you." },
        { en: "of", ko: "~의", ex: "A box of toys." },
        { en: "under", ko: "~아래에", ex: "The cat is under the bed." },
        { en: "who", ko: "누구", ex: "Who is it?" },
        // Week 4 Let's Help
        { en: "all", ko: "모두", ex: "We all help." },
        { en: "call", ko: "부르다, 전화하다", ex: "Call me!" },
        { en: "day", ko: "날, 낮", ex: "Have a nice day." },
        { en: "her", ko: "그녀의, 그녀를", ex: "I like her dog." },
        { en: "want", ko: "원하다", ex: "I want an apple." },
        // Week 5 Follow the Map
        { en: "around", ko: "주위에, 둘레에", ex: "Look around." },
        { en: "by", ko: "~옆에, ~로", ex: "Sit by me." },
        { en: "many", ko: "많은", ex: "Many kids like games." },
        { en: "place", ko: "장소", ex: "This is a nice place." },
        { en: "walk", ko: "걷다", ex: "I walk to school." }
      ]
    }
  ]
};
