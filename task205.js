/* ?? ?????? 205. Удаление групп букв. Повторно удаляй группы из k одинаковых соседних букв, пока удалять нечего. k положительное. ???????: Middle. */

function solve(s, k) {
  let stack = [];
  for (let char of s) {
    let last = stack.at(-1);
    if (last?.[0] === char) last[1]++;
    else stack.push([char, 1]);
    if (stack.at(-1)[1] === k) stack.pop();
  }
  return stack.map(([char, count]) => char.repeat(count)).join('');
}

console.log(JSON.stringify(solve("deeedbbcccbdaa",3))); // ????? 1: "aa"
console.log(JSON.stringify(solve("abcd",2))); // ????? 2: "abcd"
console.log(JSON.stringify(solve("abc",1))); // ????? 3: ""
