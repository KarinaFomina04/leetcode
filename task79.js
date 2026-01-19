/* 📌 Задача 79. Длинная серия единиц. Найди максимальную длину непрерывной серии единиц в двоичном массиве. Уровень: Junior. */

function solve(a) {
  let best = 0;
  let current = 0;
  for (let n of a) {
    current = n === 1 ? current + 1 : 0;
    best = Math.max(best, current);
  }
  return best;
}

console.log(JSON.stringify(solve([1,1,0,1,1,1]))); // Вывод 1: 3
console.log(JSON.stringify(solve([0]))); // Вывод 2: 0
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
