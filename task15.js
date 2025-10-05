/* 📌 Задача 15. Прибыль от нескольких сделок. Найди максимальную прибыль от любого числа сделок. Одновременно можно держать одну акцию. Уровень: Junior. */

function solve(a) {
  let profit = 0;
  for (let i = 1; i < a.length; i++) profit += Math.max(0, a[i] - a[i - 1]);
  return profit;
}

console.log(JSON.stringify(solve([7,1,5,3,6,4]))); // Вывод 1: 7
console.log(JSON.stringify(solve([1,2,3]))); // Вывод 2: 2
console.log(JSON.stringify(solve([4,2]))); // Вывод 3: 0
