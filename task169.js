/* 📌 Задача 169. Ранги чисел. Замени каждое число его рангом среди различных чисел массива. Минимум имеет ранг 1, равные числа имеют один ранг. Уровень: Junior. */

function solve(a) {
  let values = [...new Set(a)].sort((x, y) => x - y);
  let ranks = new Map(values.map((n, i) => [n, i + 1]));
  return a.map(n => ranks.get(n));
}

console.log(JSON.stringify(solve([40,10,20,30]))); // Вывод 1: [4,1,2,3]
console.log(JSON.stringify(solve([100,100,100]))); // Вывод 2: [1,1,1]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
