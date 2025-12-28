/* 📌 Задача 66. Непрерывная цепочка. Найди длину самой длинной последовательности соседних целых значений, присутствующих в массиве в любом порядке. Уровень: Middle. */

function solve(a) {
  let values = new Set(a);
  let best = 0;
  for (let n of values) {
    if (values.has(n - 1)) continue;
    let end = n;
    while (values.has(end + 1)) end++;
    best = Math.max(best, end - n + 1);
  }
  return best;
}

console.log(JSON.stringify(solve([100,4,200,1,3,2]))); // Вывод 1: 4
console.log(JSON.stringify(solve([2,2]))); // Вывод 2: 1
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
