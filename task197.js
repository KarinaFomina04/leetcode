/* ?? ?????? 197. Проверка цикла в списке. Массив next задаёт индексы следующих узлов, -1 означает конец. Проверь, есть ли цикл при старте с индекса 0. Пустой массив не содержит цикла. ???????: Middle. */

function solve(next) {
  if (!next.length) return false;
  let slow = 0;
  let fast = 0;
  while (fast !== -1 && next[fast] !== -1) {
    slow = next[slow];
    fast = next[next[fast]];
    if (slow === fast) return true;
  }
  return false;
}

console.log(JSON.stringify(solve([1,2,1]))); // ????? 1: true
console.log(JSON.stringify(solve([1,-1,2]))); // ????? 2: false
console.log(JSON.stringify(solve([]))); // ????? 3: false
