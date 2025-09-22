/* 📌 Задача 8. Одиночное число. Каждое число встречается дважды, кроме одного. Найди его. Числа помещаются в знаковые 32 бита. Уровень: Junior. */

function solve(a) {
  return a.reduce((result, n) => result ^ n, 0);
}

console.log(JSON.stringify(solve([4,1,2,1,2]))); // Вывод 1: 4
console.log(JSON.stringify(solve([9]))); // Вывод 2: 9
console.log(JSON.stringify(solve([-1,2,2]))); // Вывод 3: -1
