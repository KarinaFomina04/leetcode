/* 📌 Задача 107. Сумма диагоналей. Посчитай сумму двух диагоналей квадратной матрицы. Центральный элемент учитывай один раз. Уровень: Junior. */

function solve(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    let j = a.length - 1 - i;
    sum += a[i][i];
    if (i !== j) sum += a[i][j];
  }
  return sum;
}

console.log(JSON.stringify(solve([[1,2,3],[4,5,6],[7,8,9]]))); // Вывод 1: 25
console.log(JSON.stringify(solve([[4]]))); // Вывод 2: 4
console.log(JSON.stringify(solve([[1,2],[3,4]]))); // Вывод 3: 10
