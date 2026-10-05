/* ?? ?????? 239. Минимум удалений для равенства. Найди минимальное общее число удалений символов из двух латинских строк, чтобы они стали равны. ???????: Middle. */

function solve(a, b) {
  let dp = Array.from({length: b.length + 1}, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let diagonal = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      let above = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? diagonal : 1 + Math.min(above, dp[j - 1]);
      diagonal = above;
    }
  }
  return dp[b.length];
}

console.log(JSON.stringify(solve("sea","eat"))); // ????? 1: 2
console.log(JSON.stringify(solve("abc","abc"))); // ????? 2: 0
console.log(JSON.stringify(solve("","abc"))); // ????? 3: 3
