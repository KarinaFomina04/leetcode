/* 📌 Задача 142. Количество полных квадратов. Найди минимальное количество положительных полных квадратов, сумма которых равна целому n ≥ 0. Уровень: Junior. */

function solve(n) {
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
  return dp[n];
}

console.log(JSON.stringify(solve(12))); // Вывод 1: 3
console.log(JSON.stringify(solve(13))); // Вывод 2: 2
console.log(JSON.stringify(solve(0))); // Вывод 3: 0
