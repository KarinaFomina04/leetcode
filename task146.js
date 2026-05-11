/* 📌 Задача 146. Пиковый элемент. Найди индекс любого локального максимума в непустом массиве. Соседние элементы различаются, за границами значение минус бесконечность. Уровень: Middle. */

function solve(a) {
  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (a[middle] < a[middle + 1]) left = middle + 1;
    else right = middle;
  }
  return left;
}

console.log(JSON.stringify(solve([1,3,2,1]))); // Вывод 1: 1
console.log(JSON.stringify(solve([1,2,3]))); // Вывод 2: 2
console.log(JSON.stringify(solve([5]))); // Вывод 3: 0
