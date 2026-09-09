/* ?? ?????? 223. Клетки до ближайшего нуля. Для каждой клетки двоичной матрицы верни расстояние до ближайшего нуля. За шаг можно перейти в клетку по стороне. Есть хотя бы один ноль. ???????: Middle. */

function solve(a) {
  let queue = [];
  let result = a.map((row, i) => row.map((n, j) => {
    if (n === 0) queue.push([i, j]);
    return n === 0 ? 0 : -1;
  }));
  for (let k = 0; k < queue.length; k++) {
    let [x, y] = queue[k];
    for (let [i, j] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]) {
      if (result[i]?.[j] === -1) {
        result[i][j] = result[x][y] + 1;
        queue.push([i, j]);
      }
    }
  }
  return result;
}

console.log(JSON.stringify(solve([[0,0,0],[0,1,0],[1,1,1]]))); // ????? 1: [[0,0,0],[0,1,0],[1,2,1]]
console.log(JSON.stringify(solve([[1,1,0]]))); // ????? 2: [[2,1,0]]
console.log(JSON.stringify(solve([[0]]))); // ????? 3: [[0]]
