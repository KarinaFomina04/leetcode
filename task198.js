/* ?? ?????? 198. Начало цикла в списке. Массив next задаёт индексы следующих узлов, -1 означает конец. Верни индекс первого узла цикла при старте с 0 или -1. ???????: Middle. */

function solve(next) {
  let slow = 0;
  let fast = 0;
  while (next.length && fast !== -1 && next[fast] !== -1) {
    slow = next[slow];
    fast = next[next[fast]];
    if (slow === fast) {
      let start = 0;
      while (start !== slow) {
        start = next[start];
        slow = next[slow];
      }
      return start;
    }
  }
  return -1;
}

console.log(JSON.stringify(solve([1,2,3,1]))); // ????? 1: 1
console.log(JSON.stringify(solve([0]))); // ????? 2: 0
console.log(JSON.stringify(solve([1,-1]))); // ????? 3: -1
