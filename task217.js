/* ?? ?????? 217. Таблица единичных битов. Для каждого числа от 0 до n верни количество единиц в двоичной записи. 0 ≤ n ≤ 10⁶. ???????: Junior. */

function solve(n) {
  let result = [0];
  for (let i = 1; i <= n; i++) result[i] = result[Math.floor(i / 2)] + i % 2;
  return result;
}

console.log(JSON.stringify(solve(5))); // ????? 1: [0,1,1,2,1,2]
console.log(JSON.stringify(solve(0))); // ????? 2: [0]
console.log(JSON.stringify(solve(2))); // ????? 3: [0,1,1]
