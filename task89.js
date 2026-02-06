/* 📌 Задача 89. Разность множеств. Верни уникальные элементы a, которых нет в b, в порядке появления. Уровень: Junior. */

function solve(a, b) {
  let excluded = new Set(b);
  return [...new Set(a)].filter(n => !excluded.has(n));
}

console.log(JSON.stringify(solve([1,2,1,3],[2]))); // Вывод 1: [1,3]
console.log(JSON.stringify(solve([1],[1]))); // Вывод 2: []
console.log(JSON.stringify(solve([],[]))); // Вывод 3: []
