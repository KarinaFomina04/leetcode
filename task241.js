/* ?? ?????? 241. Разбиение целого числа. Разбей целое n на сумму как минимум двух положительных целых. Верни максимальное произведение слагаемых. 2 ≤ n ≤ 58. ???????: Middle. */

function solve(n) {
  let dp = Array(n + 1).fill(0);
  for (let value = 2; value <= n; value++) {
    for (let first = 1; first < value; first++) {
      let rest = value - first;
      dp[value] = Math.max(dp[value], first * Math.max(rest, dp[rest]));
    }
  }
  return dp[n];
}

console.log(JSON.stringify(solve(2))); // ????? 1: 1
console.log(JSON.stringify(solve(10))); // ????? 2: 36
console.log(JSON.stringify(solve(4))); // ????? 3: 4
