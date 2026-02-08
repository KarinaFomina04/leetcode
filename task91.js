/* 📌 Задача 91. Симметричная разность. Верни уникальные числа, которые есть ровно в одном массиве. Сначала элементы a, потом b, в исходном порядке. Уровень: Junior. */

function solve(a, b) {
  let first = new Set(a);
  let second = new Set(b);
  return [...first].filter(n => !second.has(n)).concat([...second].filter(n => !first.has(n)));
}

console.log(JSON.stringify(solve([1,2,2],[2,3]))); // Вывод 1: [1,3]
console.log(JSON.stringify(solve([1],[1]))); // Вывод 2: []
console.log(JSON.stringify(solve([],[2,2]))); // Вывод 3: [2]
