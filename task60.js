/* 📌 Задача 60. Разворот целого числа. Разверни цифры знакового 32-битного числа, сохрани знак. При выходе за диапазон верни 0. Уровень: Junior. */

function solve(n) {
  let value = Number([...String(Math.abs(n))].reverse().join('')) * Math.sign(n);
  return value < -(2 ** 31) || value >= 2 ** 31 ? 0 : value;
}

console.log(JSON.stringify(solve(-120))); // Вывод 1: -21
console.log(JSON.stringify(solve(1534236469))); // Вывод 2: 0
console.log(JSON.stringify(solve(0))); // Вывод 3: 0
