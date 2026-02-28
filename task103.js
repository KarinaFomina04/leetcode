/* 📌 Задача 103. Транспонирование. Поменяй местами строки и столбцы прямоугольной матрицы. Для пустой матрицы верни пустой массив. Уровень: Junior. */

function solve(a) {
  return (a[0] ?? []).map((_, j) => a.map(row => row[j]));
}

console.log(JSON.stringify(solve([[1,2,3],[4,5,6]]))); // Вывод 1: [[1,4],[2,5],[3,6]]
console.log(JSON.stringify(solve([[2]]))); // Вывод 2: [[2]]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
