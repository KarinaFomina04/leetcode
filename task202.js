/* ?? ?????? 202. Столкновения астероидов. Знак задаёт направление, модуль ненулевого числа задаёт размер. При столкновении исчезает меньший астероид, при равенстве оба. Верни выжившие по порядку. ???????: Middle. */

function solve(a) {
  let stack = [];
  for (let n of a) {
    while (n < 0 && stack.at(-1) > 0 && stack.at(-1) < -n) stack.pop();
    if (n < 0 && stack.at(-1) > 0) {
      if (stack.at(-1) === -n) stack.pop();
    } else stack.push(n);
  }
  return stack;
}

console.log(JSON.stringify(solve([5,10,-5]))); // ????? 1: [5,10]
console.log(JSON.stringify(solve([8,-8]))); // ????? 2: []
console.log(JSON.stringify(solve([10,2,-15]))); // ????? 3: [-15]
