/* 📌 Задача 145. Поиск после сдвига. Найди индекс k в циклически сдвинутом отсортированном массиве различных чисел или -1 за логарифмическое время. Уровень: Middle. */

function solve(a, k) {
  let left = 0;
  let right = a.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (a[middle] === k) return middle;
    if (a[left] <= a[middle]) {
      if (a[left] <= k && k < a[middle]) right = middle - 1;
      else left = middle + 1;
    } else if (a[middle] < k && k <= a[right]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

console.log(JSON.stringify(solve([4,5,6,7,0,1,2],0))); // Вывод 1: 4
console.log(JSON.stringify(solve([4,5,1,2],3))); // Вывод 2: -1
console.log(JSON.stringify(solve([1],1))); // Вывод 3: 0
