/* ?? ?????? 237. Переплетение строк. Проверь, можно ли получить c, чередуя символы из a и b с сохранением порядка в каждой строке. Все строки содержат латинские буквы. ???????: Middle. */

function solve(a, b, c) {
  if (a.length + b.length !== c.length) return false;
  let dp = Array(b.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0 && j === 0) continue;
      let char = c[i + j - 1];
      dp[j] = (i > 0 && dp[j] && a[i - 1] === char) || (j > 0 && dp[j - 1] && b[j - 1] === char);
    }
  }
  return dp[b.length];
}

console.log(JSON.stringify(solve("aabcc","dbbca","aadbbcbcac"))); // ????? 1: true
console.log(JSON.stringify(solve("aabcc","dbbca","aadbbbaccc"))); // ????? 2: false
console.log(JSON.stringify(solve("","",""))); // ????? 3: true
