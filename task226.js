/* ?? ?????? 226. Сглаживание изображения. Замени каждую клетку непустой прямоугольной матрицы средним её значения и существующих соседей по сторонам и диагоналям. Округляй вниз. ???????: Middle. */

function solve(a) {
  return a.map((row, x) => row.map((_, y) => {
    let sum = 0;
    let count = 0;
    for (let i = Math.max(0, x - 1); i <= Math.min(a.length - 1, x + 1); i++) {
      for (let j = Math.max(0, y - 1); j <= Math.min(row.length - 1, y + 1); j++) {
        sum += a[i][j];
        count++;
      }
    }
    return Math.floor(sum / count);
  }));
}

console.log(JSON.stringify(solve([[1,1,1],[1,0,1],[1,1,1]]))); // ????? 1: [[0,0,0],[0,0,0],[0,0,0]]
console.log(JSON.stringify(solve([[5,9]]))); // ????? 2: [[7,7]]
console.log(JSON.stringify(solve([[-3]]))); // ????? 3: [[-3]]
