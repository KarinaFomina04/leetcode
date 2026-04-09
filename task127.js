/* 📌 Задача 127. Компоненты графа. Посчитай компоненты неориентированного графа с вершинами от 0 до n - 1. Даны пары концов рёбер. Уровень: Middle. */

function solve(n, a) {
  let parent = Array.from({length: n}, (_, i) => i);
  function root(x) {
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }
  let count = n;
  for (let [x, y] of a) {
    let first = root(x);
    let second = root(y);
    if (first !== second) {
      parent[first] = second;
      count--;
    }
  }
  return count;
}

console.log(JSON.stringify(solve(5,[[0,1],[1,2],[3,4]]))); // Вывод 1: 2
console.log(JSON.stringify(solve(3,[[0,1],[1,2],[2,0]]))); // Вывод 2: 1
console.log(JSON.stringify(solve(0,[]))); // Вывод 3: 0
