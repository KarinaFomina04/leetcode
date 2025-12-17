/* 📌 Задача 59. Наименьшее общее кратное. Найди НОК двух неотрицательных целых чисел. Если одно равно нулю, верни 0. Результат помещается в безопасное целое число. Уровень: Junior. */

function solve(a, b) {
  if (!a || !b) return 0;
  let x = a;
  let y = b;
  while (y) [x, y] = [y, x % y];
  return a / x * b;
}

console.log(JSON.stringify(solve(6,8))); // Вывод 1: 24
console.log(JSON.stringify(solve(3,7))); // Вывод 2: 21
console.log(JSON.stringify(solve(0,3))); // Вывод 3: 0
