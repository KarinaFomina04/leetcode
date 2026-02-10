/* 📌 Задача 93. Уникальные частоты. Проверь, что никакие два различных числа массива не встречаются одинаковое количество раз. Уровень: Junior. */

function solve(a) {
  let counts = new Map();
  for (let n of a) counts.set(n, (counts.get(n) || 0) + 1);
  return new Set(counts.values()).size === counts.size;
}

console.log(JSON.stringify(solve([1,2,2,1,1,3]))); // Вывод 1: true
console.log(JSON.stringify(solve([1,2]))); // Вывод 2: false
console.log(JSON.stringify(solve([]))); // Вывод 3: true
