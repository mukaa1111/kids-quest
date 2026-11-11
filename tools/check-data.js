// 데이터 파일 검사. 사용법: node tools/check-data.js  (kids-quest 폴더에서)
// 문제 보기 중복, 같은 문제 두 번, 영어 예문에 단어가 없는 경우 등을 찾아 알려 준다.
global.window = {};
['dictation', 'english', 'quiz', 'quiz2', 'cards'].forEach(function (f) { require('../data/' + f + '.js'); });
var w = global.window, bad = 0;
function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

var total = 0;
Object.keys(w.QUIZ).forEach(function (t) {
  var v = w.QUIZ[t], seen = {};
  total += v.items.length;
  v.items.forEach(function (q, i) {
    if (new Set(q.o).size !== 4) { bad++; console.log('보기 중복:', t, q.q); }
    if (seen[q.q]) { bad++; console.log('같은 문제:', t, q.q); }
    seen[q.q] = 1;
    if (q.a !== 0) { bad++; console.log('정답이 첫 보기가 아님:', t, q.q); }
  });
  console.log('퀴즈', t, v.items.length);
});
console.log('퀴즈 합계', total);

w.ENGLISH.kids.forEach(function (k) {
  var s = new Set(k.words.map(function (x) { return x.en; }));
  console.log('영어', k.name, k.words.length, '단어', k.words.length - s.size ? '중복 있음!' : '', '유형', (k.types || []).join(''));
  k.words.forEach(function (x) {
    var re = new RegExp('\\b' + esc(x.en) + '\\b', 'i');
    if (!x.ex || !re.test(x.ex)) console.log('  (참고) 예문에 단어가 그대로 없음 → 문장 빈칸 문제에서 빠짐:', x.en, '|', x.ex);
  });
});

var D = w.DICTATION;
Object.keys(D.levels).forEach(function (k) {
  D.levels[k].items.forEach(function (it) {
    if (it.s.indexOf(it.w) < 0) { bad++; console.log('받아쓰기: 정답이 문장에 없음', k, it.s); }
    if (it.opts.indexOf(it.w) < 0 || new Set(it.opts).size !== 3) { bad++; console.log('받아쓰기: 보기 문제', k, it.s); }
  });
});
D.basic.forEach(function (it) { if (it.s.indexOf(it.w) < 0 || it.opts.indexOf(it.w) < 0) { bad++; console.log('받아쓰기 기본: 문제', it.s); } });
console.log('받아쓰기', Object.keys(D.levels).length, '급 +', D.basic.length, '기본, 지금', D.current, '급');

console.log('카드', w.CARDS.length, '장, 등급별', [1, 2, 3].map(function (g) { return w.CARDS.filter(function (c) { return c.grade === g; }).length; }).join('/'),
  new Set(w.CARDS.map(function (c) { return c.id; })).size === w.CARDS.length ? '' : 'id 중복!');
console.log(bad ? '문제 ' + bad + '건' : 'ok');
process.exit(bad ? 1 : 0);
