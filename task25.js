/* 📌 Задача 25. Вода между линиями. Найди максимальную площадь между двумя вертикальными линиями и осью X. Линии стоят через единицу. Уровень: Middle. */

function solve(a) {
  let left = 0;
  let right = a.length - 1;
  let best = 0;
  while (left < right) {
    best = Math.max(best, (right - left) * Math.min(a[left], a[right]));
    if (a[left] < a[right]) left++;
    else right--;
  }
  return best;
}

console.log(JSON.stringify(solve([1,8,6,2,5,4,8,3,7]))); // Вывод 1: 49
console.log(JSON.stringify(solve([2,2]))); // Вывод 2: 2
console.log(JSON.stringify(solve([7]))); // Вывод 3: 0
