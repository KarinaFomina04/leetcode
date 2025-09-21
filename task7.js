/* 📌 Задача 7. Пересечение массивов. Верни уникальные элементы первого массива, присутствующие во втором, в порядке появления. Уровень: Junior. */

function solve(a, b) {
  let values = new Set(b);
  return [...new Set(a)].filter(n => values.has(n));
}

console.log(JSON.stringify(solve([2,1,2,3],[1,2]))); // Вывод 1: [2,1]
console.log(JSON.stringify(solve([],[1]))); // Вывод 2: []
console.log(JSON.stringify(solve([4],[5]))); // Вывод 3: []
