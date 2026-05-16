/* 📌 Задача 149. Медиана двух массивов. Найди медиану двух отсортированных массивов, если вместе в них есть хотя бы один элемент. Пройди только до середины объединённого ряда. Уровень: Middle. */

function solve(a, b) {
  let size = a.length + b.length;
  let i = 0;
  let j = 0;
  let previous;
  let current;
  for (let k = 0; k <= Math.floor(size / 2); k++) {
    previous = current;
    if (j >= b.length || (i < a.length && a[i] <= b[j])) current = a[i++];
    else current = b[j++];
  }
  return size % 2 ? current : previous / 2 + current / 2;
}

console.log(JSON.stringify(solve([1,3],[2]))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,2],[3,4]))); // Вывод 2: 2.5
console.log(JSON.stringify(solve([],[7]))); // Вывод 3: 7
