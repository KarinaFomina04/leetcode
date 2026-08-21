/* ?? ?????? 211. Нули в факториале. Найди число нулей в конце десятичной записи n!, где n — безопасное неотрицательное целое. ???????: Junior. */

function solve(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

console.log(JSON.stringify(solve(5))); // ????? 1: 1
console.log(JSON.stringify(solve(25))); // ????? 2: 6
console.log(JSON.stringify(solve(3))); // ????? 3: 0
