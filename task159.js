/* 📌 Задача 159. Равное число нулей и единиц. Найди длину самого длинного непрерывного подмассива с равным количеством нулей и единиц. Уровень: Middle. */

function solve(a) {
  let first = new Map([[0, -1]]);
  let balance = 0;
  let best = 0;
  for (let i = 0; i < a.length; i++) {
    balance += a[i] ? 1 : -1;
    if (first.has(balance)) best = Math.max(best, i - first.get(balance));
    else first.set(balance, i);
  }
  return best;
}

console.log(JSON.stringify(solve([0,1,0]))); // Вывод 1: 2
console.log(JSON.stringify(solve([0,0,1,1,0,1]))); // Вывод 2: 6
console.log(JSON.stringify(solve([1,1]))); // Вывод 3: 0
