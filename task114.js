/* 📌 Задача 114. Заливка области. Замени цвет клетки (r,c) и всех связанных с ней клеток того же цвета. Соседство по сторонам. Начальная клетка существует. Уровень: Middle. */

function solve(a, r, c, color) {
  let old = a[r][c];
  if (old === color) return a;
  let stack = [[r, c]];
  a[r][c] = color;
  while (stack.length) {
    let [x, y] = stack.pop();
    for (let [i, j] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]) {
      if (a[i]?.[j] === old) {
        a[i][j] = color;
        stack.push([i, j]);
      }
    }
  }
  return a;
}

console.log(JSON.stringify(solve([[1,1,0],[1,0,1]],0,0,2))); // Вывод 1: [[2,2,0],[2,0,1]]
console.log(JSON.stringify(solve([[5]],0,0,5))); // Вывод 2: [[5]]
console.log(JSON.stringify(solve([[0,0]],0,1,1))); // Вывод 3: [[1,1]]
