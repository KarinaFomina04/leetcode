/* 📌 Задача 40. Наибольший общий делитель. Найди НОД двух неотрицательных целых чисел. Для двух нулей верни 0. Уровень: Junior. */

function solve(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

console.log(JSON.stringify(solve(48,18))); // Вывод 1: 6
console.log(JSON.stringify(solve(0,9))); // Вывод 2: 9
console.log(JSON.stringify(solve(0,0))); // Вывод 3: 0
