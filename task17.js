/* 📌 Задача 17. Максимальная сумма подмассива. Найди максимальную сумму непустого непрерывного подмассива. Вход непустой. Уровень: Junior. */

function solve(a) {
  let current = a[0];
  let best = current;
  for (let n of a.slice(1)) {
    current = Math.max(n, current + n);
    best = Math.max(best, current);
  }
  return best;
}

console.log(JSON.stringify(solve([-2,1,-3,4,-1,2,1,-5]))); // Вывод 1: 6
console.log(JSON.stringify(solve([-4,-2]))); // Вывод 2: -2
console.log(JSON.stringify(solve([7]))); // Вывод 3: 7
