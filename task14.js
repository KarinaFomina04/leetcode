/* 📌 Задача 14. Прибыль от одной сделки. Найди максимальную прибыль от одной покупки и продажи акции. Без прибыли верни 0. Уровень: Junior. */

function solve(a) {
  let min = Infinity;
  let profit = 0;
  for (let price of a) {
    profit = Math.max(profit, price - min);
    min = Math.min(min, price);
  }
  return profit;
}

console.log(JSON.stringify(solve([7,1,5,3,6,4]))); // Вывод 1: 5
console.log(JSON.stringify(solve([5,3,1]))); // Вывод 2: 0
console.log(JSON.stringify(solve([2]))); // Вывод 3: 0
