/* 📌 Задача 39. Степень двойки. Проверь, является ли знаковое 32-битное целое число степенью двойки. Уровень: Junior. */

function solve(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(JSON.stringify(solve(16))); // Вывод 1: true
console.log(JSON.stringify(solve(1))); // Вывод 2: true
console.log(JSON.stringify(solve(0))); // Вывод 3: false
