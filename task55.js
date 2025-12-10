/* 📌 Задача 55. Факториал. Вычисли факториал целого числа от 0 до 18. Уровень: Junior. */

function solve(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

console.log(JSON.stringify(solve(5))); // Вывод 1: 120
console.log(JSON.stringify(solve(0))); // Вывод 2: 1
console.log(JSON.stringify(solve(3))); // Вывод 3: 6
