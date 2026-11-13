// 받아쓰기 음성 파일 목록을 만든다. 사용법 (kids-quest 폴더에서):
//   1) node tools/make-dict-audio.js          → sounds/dict/list.json 과 data/dict-audio.js 를 쓴다
//   2) powershell -File tools/make-dict-audio.ps1   → 목록에 있는 문장을 한국어 음성(wav)으로 만든다 (이미 있는 파일은 건너뜀)
// 받아쓰기 문장(data/dictation.js)을 고치거나 보탠 뒤에 이 두 가지를 다시 돌리면 된다.
// 파일 이름은 문장 글자에서 만든 번호라서, 문장이 바뀌면 새 파일이 생기고 안 쓰는 파일은 지워도 된다.
var fs = require('fs'), path = require('path'), crypto = require('crypto');
global.window = {};
require('../data/dictation.js');
var D = global.window.DICTATION, seen = {}, list = [], map = {};
function add(it) {
  if (seen[it.s]) return; seen[it.s] = 1;
  var file = 's' + crypto.createHash('md5').update(it.s, 'utf8').digest('hex').slice(0, 10) + '.wav';
  list.push({ file: file, text: it.s }); map[it.s] = file;
}
// 전체 16급을 다 만들면 20MB라서(기준 15MB), 지금 급수(current)와 그보다 낮은 급(복습에 나옴)만 만든다.
// 급수를 올리면 이 두 가지를 다시 돌려야 새 급의 음성이 생긴다. 음성이 없는 문장은 패드 음성으로 읽는다.
Object.keys(D.levels).filter(function (k) { return +k <= +D.current; }).forEach(function (k) { D.levels[k].items.forEach(add); });
(D.basic || []).forEach(add);
var dir = path.join(__dirname, '..', 'sounds', 'dict');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'list.json'), JSON.stringify(list, null, 1), 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'data', 'dict-audio.js'),
  '// 자동으로 만든 파일 (tools/make-dict-audio.js). 받아쓰기 문장 → 한국어 음성 파일 이름.\nwindow.DICT_AUDIO = ' + JSON.stringify(map, null, 1) + ';\n', 'utf8');
console.log(list.length + ' sentences → sounds/dict/list.json, data/dict-audio.js');
