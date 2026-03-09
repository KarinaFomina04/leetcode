/* 📌 Задача 108. Матрица Тёплица. Проверь, совпадают ли все элементы на каждой диагонали, идущей вниз и вправо. Уровень: Junior. */

function solve(a) {
  for (let i = 1; i < a.length; i++) {
    for (let j = 1; j < a[i].length; j++) if (a[i][j] !== a[i - 1][j - 1]) return false;
  }
  return true;
}

console.log(JSON.stringify(solve([[1,2,3],[4,1,2]]))); // Вывод 1: true
console.log(JSON.stringify(solve([[1,2],[2,2]]))); // Вывод 2: false
console.log(JSON.stringify(solve([]))); // Вывод 3: true
