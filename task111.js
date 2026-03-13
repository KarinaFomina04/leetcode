/* 📌 Задача 111. Отражение изображения. Разверни каждую строку двоичного изображения и замени 0 на 1, а 1 на 0. Уровень: Junior. */

function solve(a) {
  return a.map(row => row.slice().reverse().map(n => 1 - n));
}

console.log(JSON.stringify(solve([[1,0,0],[1,1,0]]))); // Вывод 1: [[1,1,0],[1,0,0]]
console.log(JSON.stringify(solve([[1]]))); // Вывод 2: [[0]]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
