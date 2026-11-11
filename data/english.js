// 영어 단어 — 아이별로 따로. kids[0]은 첫째(룰루), kids[1]은 둘째(랄라). 화면의 대원 순서와 같아요.
// book: 폴리 교재, level: 폴리 레벨(GT1 = 미국 1학년, GT2 = 미국 2학년), unit: 지금 단원, week: 단어장 이름, words: { en 영어, ko 뜻, ex 짧은 예문 }
// 출처: 룰루 = HMH Journeys Grade 1 Unit 2 (Lesson 6~10) Words to Know
//       랄라 = McGraw-Hill Wonders Grade 2 Unit 2 High-Frequency Words 50 + Vocabulary 20 (공식 scope & sequence)
// 폴리 단어장(A4) 사진을 주면 그 아이의 words를 그 주 단어로 바꿉니다.
window.ENGLISH = {
  kids: [
    {
      name: "룰루",
      level: "GT1 (Grade 1)",
      book: "Journeys Ready to Roll · Unit 2 (Reading & Vocabulary)",
      unit: "Unit 2 · Lesson 6~10",
      week: "Unit 2 Words to Know (26단어)",
      // 문제 유형: 0 영어→뜻, 1 뜻→영어, 2 문장 빈칸, 3 철자 맞추기, 4 듣고 고르기
      types: [0, 1, 2, 4, 3, 1, 2, 4, 3, 2],
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
      level: "GT2 (Grade 2)",
      book: "Wonders Set Sail · Unit 2 (Textbook, Reading & Vocabulary)",
      unit: "Unit 2 · Animal Discoveries",
      week: "Unit 2 High-Frequency Words 50 + Vocabulary 20",
      // 문제 유형: 0 영어→뜻, 1 뜻→영어, 2 문장 빈칸, 3 철자 맞추기, 4 듣고 고르기
      types: [2, 3, 4, 2, 3, 1, 2, 3, 4, 2],
      words: [
        // Week 1 Baby Animals
        { en: "because", ko: "왜냐하면", ex: "I stayed home because it rained." },
        { en: "cold", ko: "추운, 차가운", ex: "It is cold today." },
        { en: "family", ko: "가족", ex: "I love my family." },
        { en: "friends", ko: "친구들", ex: "My friends are kind." },
        { en: "have", ko: "가지다", ex: "I have a dog." },
        { en: "know", ko: "알다", ex: "I know the answer." },
        { en: "off", ko: "떨어져, 꺼진", ex: "Turn off the light." },
        { en: "picture", ko: "그림, 사진", ex: "I drew a picture." },
        { en: "school", ko: "학교", ex: "I go to school." },
        { en: "took", ko: "가져갔다, 찍었다", ex: "She took a photo." },
        // Week 2 Baby Animals
        { en: "change", ko: "바꾸다, 변화", ex: "Leaves change color." },
        { en: "cheer", ko: "응원하다", ex: "We cheer for our team." },
        { en: "fall", ko: "떨어지다, 가을", ex: "Leaves fall in autumn." },
        { en: "five", ko: "다섯, 5", ex: "I have five fingers." },
        { en: "look", ko: "보다", ex: "Look at the sky." },
        { en: "open", ko: "열다", ex: "Open the door." },
        { en: "should", ko: "~해야 한다", ex: "You should sleep early." },
        { en: "their", ko: "그들의", ex: "This is their house." },
        { en: "won", ko: "이겼다", ex: "We won the game." },
        { en: "yes", ko: "네", ex: "Yes, I can." },
        // Week 3 Animals in Stories
        { en: "almost", ko: "거의", ex: "I am almost done." },
        { en: "buy", ko: "사다", ex: "Let's buy some milk." },
        { en: "food", ko: "음식", ex: "I like Korean food." },
        { en: "out", ko: "밖으로", ex: "Go out and play." },
        { en: "pull", ko: "당기다", ex: "Pull the rope." },
        { en: "saw", ko: "보았다", ex: "I saw a rainbow." },
        { en: "sky", ko: "하늘", ex: "The sky is blue." },
        { en: "straight", ko: "똑바로, 곧장", ex: "Walk straight." },
        { en: "under", ko: "~아래에", ex: "The cat is under the table." },
        { en: "wash", ko: "씻다", ex: "Wash your hands." },
        // Week 4 Animals in Stories
        { en: "baby", ko: "아기", ex: "The baby is sleeping." },
        { en: "early", ko: "일찍", ex: "I wake up early." },
        { en: "eight", ko: "여덟, 8", ex: "A spider has eight legs." },
        { en: "isn't", ko: "~이 아니다", ex: "It isn't mine." },
        { en: "learn", ko: "배우다", ex: "I learn English." },
        { en: "seven", ko: "일곱, 7", ex: "Seven days in a week." },
        { en: "start", ko: "시작하다", ex: "Let's start the game." },
        { en: "these", ko: "이것들", ex: "These are my books." },
        { en: "try", ko: "해 보다, 노력하다", ex: "Try again!" },
        { en: "walk", ko: "걷다", ex: "I walk to school." },
        // Week 5 Animals in Poems
        { en: "bird", ko: "새", ex: "A bird can fly." },
        { en: "far", ko: "먼, 멀리", ex: "The park is far." },
        { en: "field", ko: "들판", ex: "Cows are in the field." },
        { en: "flower", ko: "꽃", ex: "A pretty flower." },
        { en: "grow", ko: "자라다", ex: "Plants grow in spring." },
        { en: "leaves", ko: "나뭇잎들", ex: "Green leaves." },
        { en: "light", ko: "빛, 가벼운", ex: "Turn on the light." },
        { en: "orange", ko: "주황색, 오렌지", ex: "An orange cat." },
        { en: "ready", ko: "준비된", ex: "I am ready!" },
        { en: "until", ko: "~까지", ex: "Wait until noon." },
        // Vocabulary · Baby Animals (공식 scope & sequence)
        { en: "adult", ko: "어른, 다 자란 동물", ex: "An adult bear is very big." },
        { en: "alive", ko: "살아 있는", ex: "The plant is still alive." },
        { en: "covered", ko: "덮인", ex: "The hill is covered with snow." },
        { en: "fur", ko: "털", ex: "A rabbit has soft fur." },
        { en: "giant", ko: "거대한", ex: "A giant panda eats bamboo." },
        { en: "groom", ko: "털을 손질하다", ex: "Cats groom their fur." },
        { en: "mammal", ko: "포유류", ex: "A whale is a mammal." },
        { en: "offspring", ko: "새끼, 자손", ex: "A lion cares for its offspring." },
        // Vocabulary · Animals in Stories
        { en: "believe", ko: "믿다", ex: "I believe you." },
        { en: "delicious", ko: "맛있는", ex: "This pizza is delicious." },
        { en: "feast", ko: "잔치, 맛있는 큰 식사", ex: "We had a big feast." },
        { en: "fond", ko: "좋아하는", ex: "I am fond of dogs." },
        { en: "lessons", ko: "교훈, 수업", ex: "Stories teach us lessons." },
        { en: "remarkable", ko: "놀라운, 훌륭한", ex: "She did a remarkable job." },
        { en: "snatch", ko: "낚아채다", ex: "Birds snatch fish from the water." },
        { en: "stories", ko: "이야기들", ex: "Grandpa tells funny stories." },
        // Vocabulary · Animals in Poems
        { en: "behave", ko: "행동하다, 얌전히 굴다", ex: "Please behave in class." },
        { en: "express", ko: "표현하다", ex: "Express your feelings." },
        { en: "feathers", ko: "깃털", ex: "A bird has feathers." },
        { en: "flapping", ko: "퍼덕이는", ex: "The duck is flapping its wings." }
      ]
    }
  ]
};
