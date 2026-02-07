/* 📌 Задача 90. Пересечение с повторами. Верни общие элементы с учётом кратности в порядке появления в первом массиве. Уровень: Middle. */

function solve(a, b) {
  let counts = new Map();
  for (let n of b) counts.set(n, (counts.get(n) || 0) + 1);
  let result = [];
  for (let n of a) {
    if (counts.get(n) > 0) {
      result.push(n);
      counts.set(n, counts.get(n) - 1);
    }
  }
  return result;
}

console.log(JSON.stringify(solve([4,9,5,4],[9,4,4,8]))); // Вывод 1: [4,9,4]
console.log(JSON.stringify(solve([2,2],[2]))); // Вывод 2: [2]
console.log(JSON.stringify(solve([],[1]))); // Вывод 3: []
