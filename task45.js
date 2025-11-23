/* 📌 Задача 45. Пересечение отрезков. Верни пересечение двух замкнутых отрезков или пустой массив. Уровень: Junior. */

function solve(a, b) {
  let start = Math.max(a[0], b[0]);
  let end = Math.min(a[1], b[1]);
  return start <= end ? [start, end] : [];
}

console.log(JSON.stringify(solve([1,4],[2,6]))); // Вывод 1: [2,4]
console.log(JSON.stringify(solve([1,2],[2,3]))); // Вывод 2: [2,2]
console.log(JSON.stringify(solve([1,2],[3,4]))); // Вывод 3: []
