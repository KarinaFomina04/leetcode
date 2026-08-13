/* ?? ?????? 206. Уникальная строка. Оставь по одному вхождению каждой латинской буквы, сохранив порядок выбранных позиций. Верни лексикографически наименьший результат. ???????: Middle. */

function solve(s) {
  let last = new Map();
  for (let i = 0; i < s.length; i++) last.set(s[i], i);
  let stack = [];
  let used = new Set();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (used.has(char)) continue;
    while (stack.at(-1) > char && last.get(stack.at(-1)) > i) used.delete(stack.pop());
    stack.push(char);
    used.add(char);
  }
  return stack.join('');
}

console.log(JSON.stringify(solve("bcabc"))); // ????? 1: "abc"
console.log(JSON.stringify(solve("cbacdcbc"))); // ????? 2: "acdb"
console.log(JSON.stringify(solve(""))); // ????? 3: ""
