/* 📌 Задача 12. Пропавшее число. В массиве длины n есть различные числа от 0 до n. Найди отсутствующее. Уровень: Junior. */

function solve(a) {
  return a.length + a.reduce((sum, n, i) => sum + i - n, 0);
}

console.log(JSON.stringify(solve([3,0,1]))); // Вывод 1: 2
console.log(JSON.stringify(solve([]))); // Вывод 2: 0
console.log(JSON.stringify(solve([0,1]))); // Вывод 3: 2
