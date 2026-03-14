/* 📌 Задача 112. Острова. Посчитай компоненты из единиц в двоичной матрице. Соседство только по сторонам. Уровень: Middle. */

function solve(a) {
  let seen = a.map(row => row.map(() => false));
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (!a[i][j] || seen[i][j]) continue;
      count++;
      let stack = [[i, j]];
      seen[i][j] = true;
      while (stack.length) {
        let [x, y] = stack.pop();
        for (let [r, c] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]) {
          if (a[r]?.[c] && !seen[r][c]) {
            seen[r][c] = true;
            stack.push([r, c]);
          }
        }
      }
    }
  }
  return count;
}

console.log(JSON.stringify(solve([[1,1,0],[0,0,1],[1,0,1]]))); // Вывод 1: 3
console.log(JSON.stringify(solve([[1,0],[0,1]]))); // Вывод 2: 2
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
