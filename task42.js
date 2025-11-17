/* 📌 Задача 42. Счастливое число. Заменяй положительное целое число суммой квадратов цифр. Проверь, приводит ли процесс к единице. Уровень: Junior. */

function solve(n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = [...String(n)].reduce((sum, digit) => sum + digit * digit, 0);
  }
  return n === 1;
}

console.log(JSON.stringify(solve(19))); // Вывод 1: true
console.log(JSON.stringify(solve(2))); // Вывод 2: false
console.log(JSON.stringify(solve(1))); // Вывод 3: true
