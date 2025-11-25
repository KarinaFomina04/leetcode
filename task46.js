/* 📌 Задача 46. Объединение интервалов. Объедини пересекающиеся замкнутые интервалы и отсортируй по левой границе. Уровень: Junior. */

function solve(a) {
  let result = [];
  for (let [start, end] of a.slice().sort((x, y) => x[0] - y[0])) {
    let last = result.at(-1);
    if (last && last[1] >= start) last[1] = Math.max(last[1], end);
    else result.push([start, end]);
  }
  return result;
}

console.log(JSON.stringify(solve([[8,10],[1,3],[2,6]]))); // Вывод 1: [[1,6],[8,10]]
console.log(JSON.stringify(solve([[1,4],[4,5]]))); // Вывод 2: [[1,5]]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
