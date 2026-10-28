/* 🧩 Задача 251. Минимум монет. Даны номиналы положительных целых монет и неотрицательная сумма amount. Каждый номинал доступен без ограничений. Верни минимальное число монет или -1, если набрать сумму невозможно. Уровень: Middle. */

function solve(coins, amount) {
  const best = Array(amount + 1).fill(Infinity);
  best[0] = 0;
  for (let sum = 1; sum <= amount; sum++) {
    for (const coin of coins) {
      if (coin <= sum) best[sum] = Math.min(best[sum], best[sum - coin] + 1);
    }
  }
  return best[amount] === Infinity ? -1 : best[amount];
}

console.log(JSON.stringify(solve([1,2,5], 11))); // Пример 1: 3
console.log(JSON.stringify(solve([2], 3))); // Пример 2: -1
console.log(JSON.stringify(solve([], 0))); // Пример 3: 0
