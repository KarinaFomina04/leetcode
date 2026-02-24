/* 📌 Задача 101. Наибольшая разница. Найди максимум a[j] - a[i] при i < j. Если положительной разницы нет, верни -1. Уровень: Junior. */

function solve(a) {
  let min = Infinity;
  let best = -1;
  for (let n of a) {
    if (n > min) best = Math.max(best, n - min);
    min = Math.min(min, n);
  }
  return best;
}

console.log(JSON.stringify(solve([7,1,5,4]))); // Вывод 1: 4
console.log(JSON.stringify(solve([9,4,3]))); // Вывод 2: -1
console.log(JSON.stringify(solve([2]))); // Вывод 3: -1
