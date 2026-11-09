/* 🧩 Задача 259. Поворот матрицы. Поверни квадратную матрицу на 90 градусов по часовой стрелке на месте. Верни ту же матрицу. Уровень: Middle. */

function solve(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }
  for (const row of matrix) row.reverse();
  return matrix;
}

console.log(JSON.stringify(solve([[1,2,3],[4,5,6],[7,8,9]]))); // Пример 1: [[7,4,1],[8,5,2],[9,6,3]]
console.log(JSON.stringify(solve([[1,2],[3,4]]))); // Пример 2: [[3,1],[4,2]]
console.log(JSON.stringify(solve([[1]]))); // Пример 3: [[1]]
