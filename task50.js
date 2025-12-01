/* 📌 Задача 50. Подъём по лестнице. Посчитай способы добраться до ступеньки n шагами по одной или две ступеньки. 0 ≤ n ≤ 75. Уровень: Junior. */

function solve(n) {
  let previous = 1;
  let current = 1;
  for (let i = 1; i < n; i++) [previous, current] = [current, previous + current];
  return current;
}

console.log(JSON.stringify(solve(4))); // Вывод 1: 5
console.log(JSON.stringify(solve(1))); // Вывод 2: 1
console.log(JSON.stringify(solve(0))); // Вывод 3: 1
