/* ?? ?????? 232. Монеты по порядку. Даны разные положительные номиналы. Посчитай упорядоченные последовательности монет с неотрицательной целой суммой k. Номиналы можно повторять. Результат безопасный. ???????: Junior. */

function solve(a, k) {
  let dp = Array(k + 1).fill(0);
  dp[0] = 1;
  for (let sum = 1; sum <= k; sum++) {
    for (let coin of a) if (coin <= sum) dp[sum] += dp[sum - coin];
  }
  return dp[k];
}

console.log(JSON.stringify(solve([1,2],4))); // ????? 1: 5
console.log(JSON.stringify(solve([3],2))); // ????? 2: 0
console.log(JSON.stringify(solve([],0))); // ????? 3: 1
