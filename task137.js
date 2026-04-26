/* 📌 Задача 137. Количество способов набрать сумму. Посчитай способы составить неотрицательную сумму k из различных положительных номиналов. Каждый номинал доступен без ограничений. Порядок монет не важен. Уровень: Junior. */

function solve(a, k) {
  let dp = Array(k + 1).fill(0);
  dp[0] = 1;
  for (let coin of a) {
    for (let i = coin; i <= k; i++) dp[i] += dp[i - coin];
  }
  return dp[k];
}

console.log(JSON.stringify(solve([1,2,5],5))); // Вывод 1: 4
console.log(JSON.stringify(solve([2],3))); // Вывод 2: 0
console.log(JSON.stringify(solve([],0))); // Вывод 3: 1
