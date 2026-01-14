/* 📌 Задача 76. Выбор встреч. Найди максимум непересекающихся встреч положительной длительности. Следующая может начаться сразу после предыдущей. Уровень: Middle. */

function solve(a) {
  let end = -Infinity;
  let count = 0;
  for (let [start, finish] of a.slice().sort((x, y) => x[1] - y[1])) {
    if (start >= end) {
      count++;
      end = finish;
    }
  }
  return count;
}

console.log(JSON.stringify(solve([[1,3],[2,4],[3,5]]))); // Вывод 1: 2
console.log(JSON.stringify(solve([[2,8],[3,5]]))); // Вывод 2: 1
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
