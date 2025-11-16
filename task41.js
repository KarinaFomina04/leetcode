/* 📌 Задача 41. Единичные биты. Посчитай единицы в двоичной записи беззнакового 32-битного числа. Уровень: Junior. */

function solve(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}

console.log(JSON.stringify(solve(11))); // Вывод 1: 3
console.log(JSON.stringify(solve(0))); // Вывод 2: 0
console.log(JSON.stringify(solve(4294967295))); // Вывод 3: 32
