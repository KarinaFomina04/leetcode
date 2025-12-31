/* 📌 Задача 68. Частотная сортировка. Отсортируй целые числа по возрастанию частоты, при равенстве по убыванию значения. Уровень: Junior. */

function solve(a) {
  let counts = new Map();
  for (let n of a) counts.set(n, (counts.get(n) || 0) + 1);
  return a.slice().sort((x, y) => counts.get(x) - counts.get(y) || y - x);
}

console.log(JSON.stringify(solve([1,1,2,2,2,3]))); // Вывод 1: [3,1,1,2,2,2]
console.log(JSON.stringify(solve([2,3,1]))); // Вывод 2: [3,2,1]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
