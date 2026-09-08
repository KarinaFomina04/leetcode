/* ?? ?????? 222. Самый большой остров. Найди максимальное число единиц в одной связной области двоичной матрицы. Соседство по сторонам, при отсутствии суши верни 0. ???????: Middle. */

function solve(a) {
  let best = 0;
  for (let r = 0; r < a.length; r++) {
    for (let c = 0; c < a[r].length; c++) {
      if (a[r][c] !== 1) continue;
      let stack = [[r, c]];
      a[r][c] = 0;
      let size = 0;
      while (stack.length) {
        let [x, y] = stack.pop();
        size++;
        for (let [i, j] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]) {
          if (a[i]?.[j] === 1) {
            a[i][j] = 0;
            stack.push([i, j]);
          }
        }
      }
      best = Math.max(best, size);
    }
  }
  return best;
}

console.log(JSON.stringify(solve([[1,1,0],[1,0,1]]))); // ????? 1: 3
console.log(JSON.stringify(solve([[0,0]]))); // ????? 2: 0
console.log(JSON.stringify(solve([[1],[1]]))); // ????? 3: 2
