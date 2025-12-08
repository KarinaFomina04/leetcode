/* 📌 Задача 54. Числа Фибоначчи. Верни число Фибоначчи с индексом n, начиная с 0 и 1. 0 ≤ n ≤ 78. Уровень: Junior. */

function solve(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

console.log(JSON.stringify(solve(0))); // Вывод 1: 0
console.log(JSON.stringify(solve(8))); // Вывод 2: 21
console.log(JSON.stringify(solve(1))); // Вывод 3: 1
