/* 📌 Задача 57. Простота числа. Определи, является ли целое число n простым. Уровень: Junior. */

function solve(n) {
  if (n < 2) return false;
  for (let i = 2; i <= n / i; i++) if (n % i === 0) return false;
  return true;
}

console.log(JSON.stringify(solve(29))); // Вывод 1: true
console.log(JSON.stringify(solve(49))); // Вывод 2: false
console.log(JSON.stringify(solve(1))); // Вывод 3: false
