/* 📌 Задача 6. Числовой палиндром. Проверь, читается ли десятичная запись безопасного целого числа одинаково в обе стороны. Уровень: Junior. */

function solve(n) {
  let s = String(n);
  return s === [...s].reverse().join('');
}

console.log(JSON.stringify(solve(121))); // Вывод 1: true
console.log(JSON.stringify(solve(-121))); // Вывод 2: false
console.log(JSON.stringify(solve(10))); // Вывод 3: false
