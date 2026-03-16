/* 📌 Задача 113. Береговая линия. Посчитай число сторон клеток суши, граничащих с водой или краем двоичной матрицы. Уровень: Junior. */

function solve(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 1) result += 4 - 2 * (a[i - 1]?.[j] ?? 0) - 2 * (a[i][j - 1] ?? 0);
    }
  }
  return result;
}

console.log(JSON.stringify(solve([[0,1,0],[1,1,1],[0,1,0]]))); // Вывод 1: 12
console.log(JSON.stringify(solve([[1,1],[1,1]]))); // Вывод 2: 8
console.log(JSON.stringify(solve([[0]]))); // Вывод 3: 0
