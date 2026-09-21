/* ?? ?????? 229. Лишнее ребро. Дано дерево с вершинами 1..n, к которому добавили одно ребро. Верни последнее ребро во входном списке, удаление которого оставляет дерево. ???????: Middle. */

function solve(a) {
  let parent = Array.from({length: a.length + 1}, (_, i) => i);
  function root(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }
  for (let [x, y] of a) {
    let first = root(x);
    let second = root(y);
    if (first === second) return [x, y];
    parent[first] = second;
  }
}

console.log(JSON.stringify(solve([[1,2],[1,3],[2,3]]))); // ????? 1: [2,3]
console.log(JSON.stringify(solve([[1,2],[2,3],[3,4],[1,4],[1,5]]))); // ????? 2: [1,4]
console.log(JSON.stringify(solve([[1,3],[2,3],[1,2]]))); // ????? 3: [1,2]
