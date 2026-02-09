/* 📌 Задача 92. Частоты одинаковы. Проверь, встречаются ли все различные латинские буквы строки одинаковое число раз. Пустая строка подходит. Уровень: Junior. */

function solve(s) {
  let counts = new Map();
  for (let c of s) counts.set(c, (counts.get(c) || 0) + 1);
  return new Set(counts.values()).size <= 1;
}

console.log(JSON.stringify(solve("abacbc"))); // Вывод 1: true
console.log(JSON.stringify(solve("aabbc"))); // Вывод 2: false
console.log(JSON.stringify(solve(""))); // Вывод 3: true
