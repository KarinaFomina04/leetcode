/* 📌 Задача 99. Максимальное произведение тройки. В массиве целых чисел длины не меньше трёх найди максимальное произведение трёх элементов с разных позиций. Уровень: Junior. */

function solve(a) {
  a = a.slice().sort((x, y) => x - y);
  let n = a.length;
  return Math.max(a[n - 1] * a[n - 2] * a[n - 3], a[n - 1] * a[0] * a[1]);
}

console.log(JSON.stringify(solve([-10,-10,5,2]))); // Вывод 1: 500
console.log(JSON.stringify(solve([1,2,3]))); // Вывод 2: 6
console.log(JSON.stringify(solve([-4,-3,-2,-1]))); // Вывод 3: -6
