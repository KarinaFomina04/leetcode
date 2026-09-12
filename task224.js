/* ?? ?????? 224. Отрицательные элементы матрицы. Посчитай отрицательные числа в прямоугольной матрице со строками и столбцами, отсортированными по невозрастанию. Пройди за O(строки + столбцы). ???????: Junior. */

function solve(a) {
  let column = a[0]?.length ?? 0;
  let count = 0;
  for (let row of a) {
    while (column > 0 && row[column - 1] < 0) column--;
    count += row.length - column;
  }
  return count;
}

console.log(JSON.stringify(solve([[4,3,-1],[3,0,-2],[1,-1,-3]]))); // ????? 1: 4
console.log(JSON.stringify(solve([[-1,-2]]))); // ????? 2: 2
console.log(JSON.stringify(solve([]))); // ????? 3: 0
