/* 📌 Задача 51. Выбор домов. Найди максимальную сумму денег из домов, если нельзя выбирать два соседних дома. Уровень: Junior. */

function solve(a) {
  let previous = 0;
  let current = 0;
  for (let money of a) [previous, current] = [current, Math.max(current, previous + money)];
  return current;
}

console.log(JSON.stringify(solve([2,7,9,3,1]))); // Вывод 1: 12
console.log(JSON.stringify(solve([2,1,1,2]))); // Вывод 2: 4
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
