/* 📌 Задача 123. Достижимость в графе. Для графа, заданного списками смежности, проверь, можно ли дойти из вершины s в t. Вершины заданы индексами. Уровень: Middle. */

function solve(a, s, t) {
  let stack = [s];
  let seen = new Set([s]);
  while (stack.length) {
    let vertex = stack.pop();
    if (vertex === t) return true;
    for (let next of a[vertex]) {
      if (!seen.has(next)) {
        seen.add(next);
        stack.push(next);
      }
    }
  }
  return false;
}

console.log(JSON.stringify(solve([[1],[2],[]],0,2))); // Вывод 1: true
console.log(JSON.stringify(solve([[],[]],0,1))); // Вывод 2: false
console.log(JSON.stringify(solve([[]],0,0))); // Вывод 3: true
