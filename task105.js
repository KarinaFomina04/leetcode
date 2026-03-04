/* 📌 Задача 105. Спиральный обход. Верни элементы прямоугольной матрицы по спирали, начиная в левом верхнем углу и двигаясь вправо. Уровень: Middle. */

function solve(a) {
  let result = [];
  let top = 0;
  let bottom = a.length - 1;
  let left = 0;
  let right = (a[0]?.length ?? 0) - 1;
  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) result.push(a[top][j]);
    top++;
    for (let i = top; i <= bottom; i++) result.push(a[i][right]);
    right--;
    if (top <= bottom) {
      for (let j = right; j >= left; j--) result.push(a[bottom][j]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(a[i][left]);
      left++;
    }
  }
  return result;
}

console.log(JSON.stringify(solve([[1,2,3],[4,5,6],[7,8,9]]))); // Вывод 1: [1,2,3,6,9,8,7,4,5]
console.log(JSON.stringify(solve([[1],[2]]))); // Вывод 2: [1,2]
console.log(JSON.stringify(solve([[1,2]]))); // Вывод 3: [1,2]
