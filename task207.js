/* ?? ?????? 207. Пары с заданной разностью. Посчитай уникальные пары значений с абсолютной разностью k. Разные позиции могут содержать одинаковое значение. k неотрицательное. ???????: Junior. */

function solve(a, k) {
  let counts = new Map();
  for (let n of a) counts.set(n, (counts.get(n) || 0) + 1);
  let result = 0;
  for (let [n, count] of counts) {
    if (k === 0 ? count > 1 : counts.has(n + k)) result++;
  }
  return result;
}

console.log(JSON.stringify(solve([3,1,4,1,5],2))); // ????? 1: 2
console.log(JSON.stringify(solve([1,3,1,5,4],0))); // ????? 2: 1
console.log(JSON.stringify(solve([],1))); // ????? 3: 0
