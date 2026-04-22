/* 📌 Задача 135. Общая подпоследовательность. Найди длину длиннейшей общей подпоследовательности двух строк из латинских букв. Уровень: Middle. */

function solve(a, b) {
  let dp = Array(b.length + 1).fill(0);
  for (let x of a) {
    let diagonal = 0;
    for (let j = 1; j <= b.length; j++) {
      let above = dp[j];
      dp[j] = x === b[j - 1] ? diagonal + 1 : Math.max(above, dp[j - 1]);
      diagonal = above;
    }
  }
  return dp[b.length];
}

console.log(JSON.stringify(solve("abcde","ace"))); // Вывод 1: 3
console.log(JSON.stringify(solve("abc","def"))); // Вывод 2: 0
console.log(JSON.stringify(solve("","ab"))); // Вывод 3: 0
