// 영어 단어 — 아이별로 따로. kids[0]은 첫째(룰루), kids[1]은 둘째(랄라). 화면의 대원 순서와 같아요.
// level: 폴리 레벨(GT1 = 미국 1학년, GT2 = 미국 2학년), unit: 홈 화면에 보이는 설명, week: 단어장 이름
// words: { en 영어, ko 뜻, ex 짧은 예문, def 쉬운 영어 뜻풀이 }
// 단어는 폴리 단어장·단어 시험지에 나온 것이고, 뜻·예문·뜻풀이는 따로 쉽게 지어 붙였어요.
// 폴리 단어장(A4) 사진을 주면 그 아이의 words를 그 주 단어로 바꿉니다.
window.ENGLISH = {
  kids: [
    {
      name: "룰루",
      level: "GT1 (Grade 1)",
      book: "POLY Vocabulary List (GT1) + Vocabulary Test WK10",
      unit: "English Lesson 5 · Cultural Conn. Ch.3 · 시험 복습",
      week: "폴리 단어장 28 + WK10 시험 단어 22 (50단어)",
      // 문제 유형: 0 영어→뜻, 1 뜻→영어, 2 문장 빈칸, 3 철자 맞추기, 4 듣고 고르기, 5 영어 뜻풀이 보고 고르기
      types: [0, 1, 2, 4, 3, 5, 2, 4, 3, 5],
      words: [
        // English · Lesson 5
        { en: "afraid", ko: "무서워하는", ex: "I am afraid of the dark.", def: "feeling scared" },
        { en: "candle", ko: "양초", ex: "We lit a candle on the cake.", def: "a stick of wax that gives light" },
        { en: "close", ko: "가까이", ex: "Come close to me.", def: "near; not far" },
        { en: "shout", ko: "소리치다", ex: "Do not shout in the library.", def: "to speak very loudly" },
        { en: "world", ko: "세계, 세상", ex: "I want to travel around the world.", def: "the Earth and everyone on it" },
        { en: "alone", ko: "혼자, 그대로", ex: "Leave the puppy alone.", def: "by itself; without others" },
        { en: "few", ko: "몇몇의, 조금의", ex: "I have a few friends here.", def: "not many" },
        { en: "frightened", ko: "겁먹은", ex: "The frightened cat hid under the bed.", def: "full of fear" },
        { en: "garden", ko: "정원", ex: "Flowers grow in the garden.", def: "a place where flowers or vegetables grow" },
        { en: "hard", ko: "어려운, 힘든", ex: "This puzzle is hard.", def: "not easy" },
        { en: "loudly", ko: "큰 소리로", ex: "The dog barked loudly.", def: "in a noisy way" },
        { en: "noise", ko: "소리, 소음", ex: "What is that noise?", def: "a sound" },
        { en: "quite", ko: "꽤, 매우", ex: "The soup is quite hot.", def: "very" },
        { en: "shall", ko: "~할 것이다", ex: "We shall go to the park.", def: "will" },
        { en: "shine", ko: "빛나다", ex: "Stars shine at night.", def: "to give off light" },
        { en: "harm", ko: "해치다", ex: "Do not harm the animals.", def: "to hurt or damage" },
        { en: "path", ko: "길, 오솔길", ex: "We walked along the path.", def: "a track to walk on" },
        { en: "pest", ko: "해충, 골칫거리", ex: "That bug is a pest in the garden.", def: "an animal that makes trouble" },
        // Cultural Connections · Chapter 3 Lesson 1
        { en: "flag", ko: "깃발", ex: "The flag is red and white.", def: "a piece of cloth that is a symbol of a country" },
        { en: "pledge", ko: "맹세, 굳은 약속", ex: "I made a pledge to read every day.", def: "a serious promise" },
        { en: "tradition", ko: "전통", ex: "Eating rice cake soup is a tradition.", def: "something people have done for a long time" },
        { en: "freedom", ko: "자유", ex: "Birds have the freedom to fly.", def: "being able to choose what you do" },
        { en: "justice", ko: "정의, 공정함", ex: "The judge works for justice.", def: "fair treatment" },
        // Cultural Connections · Chapter 3 Lesson 2
        { en: "national", ko: "국가의, 나라의", ex: "It is a national holiday.", def: "about a whole country" },
        { en: "emblem", ko: "상징, 문장", ex: "The team emblem has a tiger on it.", def: "a picture that stands for a group" },
        { en: "landmark", ko: "명소, 랜드마크", ex: "The tower is a famous landmark.", def: "a well-known place or building" },
        { en: "symbolize", ko: "상징하다", ex: "Hearts symbolize love.", def: "to stand for something" },
        { en: "connect", ko: "연결하다", ex: "Connect the two dots.", def: "to join together" },
        // Vocabulary Test WK10 복습 (시험에 나온 단어)
        { en: "ocean", ko: "바다, 대양", ex: "Whales live in the ocean.", def: "a very large sea" },
        { en: "mountain", ko: "산", ex: "We climbed the mountain.", def: "a very high hill" },
        { en: "log", ko: "통나무", ex: "A frog sat on a log.", def: "a thick piece of a tree" },
        { en: "tip", ko: "끝", ex: "The tip of my pencil broke.", def: "the end of something" },
        { en: "environment", ko: "환경", ex: "We must keep our environment clean.", def: "the land, water, and air around us" },
        { en: "shift", ko: "옮기다, 이동하다", ex: "Please shift your chair a little.", def: "to move" },
        { en: "continent", ko: "대륙", ex: "Asia is a big continent.", def: "one of the large lands of the Earth" },
        { en: "tap", ko: "톡톡 두드리다", ex: "Tap the door two times.", def: "to hit lightly" },
        { en: "natural resource", ko: "천연자원", ex: "Water is a natural resource.", def: "something from nature that people use" },
        { en: "weather", ko: "날씨", ex: "The weather is sunny today.", def: "how hot, cold, wet, or dry it is outside" },
        { en: "river", ko: "강", ex: "A boat goes down the river.", def: "a large stream of water" },
        { en: "rod", ko: "막대", ex: "He has a fishing rod.", def: "a thin, straight stick" },
        { en: "try", ko: "노력하다, 해 보다", ex: "Try to catch the ball.", def: "to work hard to do something" },
        { en: "plain", ko: "평원", ex: "Horses run on the plain.", def: "flat land" },
        { en: "conservation", ko: "보호, 보존", ex: "Conservation helps animals and forests.", def: "taking care of nature" },
        { en: "stream", ko: "시냇물", ex: "Fish swim in the stream.", def: "a small river" },
        { en: "rowboat", ko: "노 젓는 배", ex: "We rode a rowboat on the lake.", def: "a small boat you move with oars" },
        { en: "meal", ko: "식사", ex: "Breakfast is my favorite meal.", def: "food you eat at one time" },
        { en: "use", ko: "사용하다", ex: "I use a spoon to eat soup.", def: "to do something with a thing" },
        { en: "consume", ko: "소비하다, 써 버리다", ex: "People consume a lot of water.", def: "to use up" },
        { en: "drop", ko: "떨어뜨리다", ex: "Do not drop the cup.", def: "to let something fall" },
        { en: "dash", ko: "급히 달려가다", ex: "I dash to the bus stop.", def: "to run fast" }
      ]
    },
    {
      name: "랄라",
      level: "GT2 (Grade 2)",
      book: "Poly Vocabulary Test (GT2) WK8 · WK10",
      unit: "Vocabulary Test WK8 · WK10 단어 복습",
      week: "WK8 · WK10 시험 단어 (36단어)",
      // 문제 유형: 0 영어→뜻, 1 뜻→영어, 2 문장 빈칸, 3 철자 맞추기, 4 듣고 고르기, 5 영어 뜻풀이 보고 고르기
      types: [2, 3, 5, 2, 3, 1, 5, 3, 4, 2],
      words: [
        // Vocabulary Test WK8
        { en: "migrate", ko: "이동하다, 이주하다", ex: "Birds migrate south in winter.", def: "to move from one place to another" },
        { en: "wisdom", ko: "지혜", ex: "My grandmother has great wisdom.", def: "knowing what is right and good" },
        { en: "room", ko: "공간, 자리", ex: "There is room for one more person.", def: "space" },
        { en: "polite", ko: "예의 바른", ex: "It is polite to say thank you.", def: "having good manners" },
        { en: "route", ko: "길, 경로", ex: "This is the fastest route to school.", def: "the way to get to a place" },
        { en: "evidence", ko: "증거", ex: "The footprints were evidence.", def: "facts that show something is true" },
        { en: "environment", ko: "환경", ex: "Fish need a clean environment.", def: "everything around a living thing" },
        { en: "plenty", ko: "많음, 충분함", ex: "We have plenty of time.", def: "a lot; more than enough" },
        { en: "completely", ko: "완전히", ex: "The room was completely dark.", def: "totally" },
        { en: "remained", ko: "남아 있었다, 머물렀다", ex: "The dog remained by the door.", def: "stayed" },
        { en: "folktale", ko: "옛이야기, 민담", ex: "Grandpa told us an old folktale.", def: "an old story told again and again" },
        { en: "victory", ko: "승리", ex: "Our team cheered after the victory.", def: "a win" },
        { en: "resource", ko: "자원", ex: "Water is an important resource.", def: "something people use to meet their needs" },
        { en: "harbor", ko: "항구", ex: "Ships rest in the harbor.", def: "a safe place for ships" },
        { en: "splash", ko: "물을 튀기다", ex: "The kids splash in the pool.", def: "to make water fly around" },
        { en: "ashamed", ko: "부끄러운", ex: "He felt ashamed of his lie.", def: "feeling bad about what you did" },
        { en: "rural", ko: "시골의", ex: "Farms are in rural areas.", def: "of the countryside" },
        { en: "urban", ko: "도시의", ex: "Tall buildings fill urban areas.", def: "of the city" },
        { en: "nonsense", ko: "터무니없는 말", ex: "That story is nonsense.", def: "silly words that mean nothing" },
        { en: "guest", ko: "손님", ex: "We have a guest for dinner.", def: "a person who is invited" },
        { en: "host", ko: "손님을 맞는 주인", ex: "The host welcomed everyone.", def: "a person who invites guests" },
        // Vocabulary Test WK10
        { en: "law", ko: "법", ex: "Everyone must follow the law.", def: "a rule made by a country" },
        { en: "perhaps", ko: "아마도", ex: "Perhaps it will snow tomorrow.", def: "maybe" },
        { en: "court", ko: "법정", ex: "The judge sits in the court.", def: "a place where a judge works" },
        { en: "ended up", ko: "결국 ~하게 되었다", ex: "We got lost and ended up at the park.", def: "came to be in the end" },
        { en: "rushed", ko: "서둘렀다", ex: "She rushed to catch the bus.", def: "hurried" },
        { en: "enlarge", ko: "크게 하다", ex: "Can you enlarge this picture?", def: "to make bigger" },
        { en: "embarrassed", ko: "창피한, 당황한", ex: "I was embarrassed when I fell.", def: "feeling shy and silly after a mistake" },
        { en: "holler", ko: "크게 소리치다", ex: "Holler if you need help.", def: "to call out loudly" },
        { en: "enjoyable", ko: "즐거운", ex: "The picnic was enjoyable.", def: "fun" },
        { en: "right", ko: "권리", ex: "Every child has the right to learn.", def: "something you are allowed to do" },
        { en: "carry out", ko: "해내다, 실행하다", ex: "The team will carry out the plan.", def: "to do a job" },
        { en: "consequence", ko: "결과", ex: "Being late was a consequence of sleeping in.", def: "what happens because of something" },
        { en: "similarity", ko: "닮은 점", ex: "There is a similarity between the twins.", def: "a way things are alike" },
        { en: "defeat", ko: "패배", ex: "The team was sad after the defeat.", def: "a loss" },
        { en: "proud", ko: "자랑스러운", ex: "I am proud of my drawing.", def: "feeling good about what you did" }
      ]
    }
  ]
};
