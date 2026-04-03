/* 📌 Задача 124. Расстояния в графе. Для каждой вершины найди минимальное число рёбер пути из s или -1. Граф задан списками смежности. Уровень: Middle. */

function solve(a, s) {
  let distance = Array(a.length).fill(-1);
  distance[s] = 0;
  let queue = [s];
  for (let i = 0; i < queue.length; i++) {
    let vertex = queue[i];
    for (let next of a[vertex]) {
      if (distance[next] === -1) {
        distance[next] = distance[vertex] + 1;
        queue.push(next);
      }
    }
  }
  return distance;
}

console.log(JSON.stringify(solve([[1,2],[3],[3],[],[]],0))); // Вывод 1: [0,1,1,2,-1]
console.log(JSON.stringify(solve([[]],0))); // Вывод 2: [0]
console.log(JSON.stringify(solve([[1],[0]],1))); // Вывод 3: [1,0]
