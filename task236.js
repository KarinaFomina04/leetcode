/* ?? ?????? 236. Общая подстрока. Найди длину самой длинной общей непрерывной подстроки двух строк из латинских букв. ???????: Middle. */

function solve(a, b) {
  let dp = Array(b.length + 1).fill(0);
  let best = 0;
  for (let char of a) {
    for (let j = b.length; j > 0; j--) {
      dp[j] = char === b[j - 1] ? dp[j - 1] + 1 : 0;
      best = Math.max(best, dp[j]);
    }
  }
  return best;
}

console.log(JSON.stringify(solve("xabcy","zabcw"))); // ????? 1: 3
console.log(JSON.stringify(solve("abc","ac"))); // ????? 2: 1
console.log(JSON.stringify(solve("","a"))); // ????? 3: 0
