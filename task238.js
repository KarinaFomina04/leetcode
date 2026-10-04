/* ?? ?????? 238. Способы получить подпоследовательность. Посчитай способы удалить символы из латинской строки s, чтобы получить строку t. Удаления с разных позиций считаются отдельно. Результат безопасный. ???????: Junior. */

function solve(s, t) {
  let dp = Array(t.length + 1).fill(0);
  dp[0] = 1;
  for (let char of s) {
    for (let j = t.length; j > 0; j--) if (char === t[j - 1]) dp[j] += dp[j - 1];
  }
  return dp[t.length];
}

console.log(JSON.stringify(solve("rabbbit","rabbit"))); // ????? 1: 3
console.log(JSON.stringify(solve("babgbag","bag"))); // ????? 2: 5
console.log(JSON.stringify(solve("abc",""))); // ????? 3: 1
