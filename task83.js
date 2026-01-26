/* 📌 Задача 83. Площадь гистограммы. Найди максимальную площадь прямоугольника под гистограммой из столбцов единичной ширины. Уровень: Middle. */

function solve(a) {
  let stack = [];
  let best = 0;
  for (let i = 0; i <= a.length; i++) {
    let height = a[i] ?? 0;
    while (stack.length && a[stack.at(-1)] > height) {
      let previous = stack.pop();
      best = Math.max(best, a[previous] * (i - (stack.at(-1) ?? -1) - 1));
    }
    stack.push(i);
  }
  return best;
}

console.log(JSON.stringify(solve([2,1,5,6,2,3]))); // Вывод 1: 10
console.log(JSON.stringify(solve([2,2]))); // Вывод 2: 4
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
