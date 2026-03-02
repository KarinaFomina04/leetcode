/* 📌 Задача 104. Поворот матрицы. Поверни квадратную матрицу на 90 градусов по часовой стрелке на месте. Уровень: Junior. */

function solve(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
  }
  for (let row of a) row.reverse();
  return a;
}

console.log(JSON.stringify(solve([[1,2],[3,4]]))); // Вывод 1: [[3,1],[4,2]]
console.log(JSON.stringify(solve([[1]]))); // Вывод 2: [[1]]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
