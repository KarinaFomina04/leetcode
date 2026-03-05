/* 📌 Задача 106. Обнуление строк и столбцов. Обнули все строки и столбцы, содержавшие ноль в исходной матрице. Уровень: Middle. */

function solve(a) {
  let rows = new Set();
  let columns = new Set();
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }
  return a.map((row, i) => row.map((n, j) => rows.has(i) || columns.has(j) ? 0 : n));
}

console.log(JSON.stringify(solve([[1,2,3],[4,0,6],[7,8,9]]))); // Вывод 1: [[1,0,3],[0,0,0],[7,0,9]]
console.log(JSON.stringify(solve([[1,2]]))); // Вывод 2: [[1,2]]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
