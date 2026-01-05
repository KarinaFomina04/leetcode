/* 📌 Задача 71. Три стороны треугольника. Найди максимальный периметр треугольника из трёх разных позиций массива положительных длин. Без решения верни 0. Уровень: Junior. */

function solve(a) {
  let sides = a.slice().sort((x, y) => y - x);
  for (let i = 0; i + 2 < sides.length; i++) {
    if (sides[i] < sides[i + 1] + sides[i + 2]) return sides[i] + sides[i + 1] + sides[i + 2];
  }
  return 0;
}

console.log(JSON.stringify(solve([2,1,2]))); // Вывод 1: 5
console.log(JSON.stringify(solve([1,2,9]))); // Вывод 2: 0
console.log(JSON.stringify(solve([3,6,2,3]))); // Вывод 3: 8
