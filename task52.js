/* 📌 Задача 52. Минимум монет. Найди минимальное число монет для неотрицательной суммы k. Положительные номиналы доступны без ограничений. Если решения нет, верни -1. Уровень: Junior. */

function solve(a, k) {
  let dp = Array(k + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= k; i++) {
    for (let coin of a) if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
  return dp[k] === Infinity ? -1 : dp[k];
}

console.log(JSON.stringify(solve([1,2,5],11))); // Вывод 1: 3
console.log(JSON.stringify(solve([2],3))); // Вывод 2: -1
console.log(JSON.stringify(solve([],0))); // Вывод 3: 0
