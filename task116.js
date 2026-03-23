/* 📌 Задача 116. Кратчайший путь в двоичной матрице. Двигайся по нулям в непустой квадратной матрице в восьми направлениях. Верни число клеток кратчайшего пути от левого верхнего до правого нижнего угла или -1. Уровень: Middle. */

function solve(a) {
  let n = a.length;
  if (a[0][0] || a[n - 1][n - 1]) return -1;
  let queue = [[0, 0, 1]];
  a[0][0] = 1;
  for (let index = 0; index < queue.length; index++) {
    let [x, y, distance] = queue[index];
    if (x === n - 1 && y === n - 1) return distance;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (a[i]?.[j] === 0) {
          a[i][j] = 1;
          queue.push([i, j, distance + 1]);
        }
      }
    }
  }
  return -1;
}

console.log(JSON.stringify(solve([[0,1],[1,0]]))); // Вывод 1: 2
console.log(JSON.stringify(solve([[1]]))); // Вывод 2: -1
console.log(JSON.stringify(solve([[0]]))); // Вывод 3: 1
