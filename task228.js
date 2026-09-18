/* ?? ?????? 228. Кратчайший путь по весам. Граф задан списками пар [сосед, вес]. Веса неотрицательные. Верни расстояния от s до всех вершин, недостижимые обозначь -1. ???????: Middle. */

function solve(a, s) {
  let distance = Array(a.length).fill(Infinity);
  let used = new Set();
  distance[s] = 0;
  for (let step = 0; step < a.length; step++) {
    let vertex = -1;
    for (let i = 0; i < a.length; i++) {
      if (!used.has(i) && (vertex === -1 || distance[i] < distance[vertex])) vertex = i;
    }
    if (distance[vertex] === Infinity) break;
    used.add(vertex);
    for (let [next, weight] of a[vertex]) distance[next] = Math.min(distance[next], distance[vertex] + weight);
  }
  return distance.map(n => n === Infinity ? -1 : n);
}

console.log(JSON.stringify(solve([[[1,5],[2,1]],[],[[1,2]],[]],0))); // ????? 1: [0,3,1,-1]
console.log(JSON.stringify(solve([[]],0))); // ????? 2: [0]
console.log(JSON.stringify(solve([[[1,0]],[]],0))); // ????? 3: [0,0]
