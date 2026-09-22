/* ?? ?????? 230. Все пути в ациклическом графе. В ориентированном ациклическом графе верни все пути из вершины 0 в последнюю вершину. Соседей обходи в порядке входа. Граф непустой. ???????: Middle. */

function solve(a) {
  let result = [];
  let path = [];
  function visit(vertex) {
    path.push(vertex);
    if (vertex === a.length - 1) result.push(path.slice());
    else for (let next of a[vertex]) visit(next);
    path.pop();
  }
  visit(0);
  return result;
}

console.log(JSON.stringify(solve([[1,2],[3],[3],[]]))); // ????? 1: [[0,1,3],[0,2,3]]
console.log(JSON.stringify(solve([[],[]]))); // ????? 2: []
console.log(JSON.stringify(solve([[]]))); // ????? 3: [[0]]
