/* ?? ?????? 201. Бейсбольный счёт. Разбери записи счёта. Число добавляет очки, C отменяет последние, D удваивает последние, + добавляет сумму двух последних. Операции корректны. Верни итог. ???????: Middle. */

function solve(a) {
  let scores = [];
  for (let token of a) {
    if (token === 'C') scores.pop();
    else if (token === 'D') scores.push(2 * scores.at(-1));
    else if (token === '+') scores.push(scores.at(-1) + scores.at(-2));
    else scores.push(Number(token));
  }
  return scores.reduce((sum, n) => sum + n, 0);
}

console.log(JSON.stringify(solve(["5","2","C","D","+"]))); // ????? 1: 30
console.log(JSON.stringify(solve(["1","C"]))); // ????? 2: 0
console.log(JSON.stringify(solve(["-3","D"]))); // ????? 3: -9
