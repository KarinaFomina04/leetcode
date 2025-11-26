/* 📌 Задача 47. Двоичный поиск. В отсортированном массиве различных чисел найди индекс k или верни -1. Уровень: Middle. */

function solve(a, k) {
  let left = 0;
  let right = a.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (a[middle] === k) return middle;
    if (a[middle] < k) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

console.log(JSON.stringify(solve([1,3,5,7],5))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,3],2))); // Вывод 2: -1
console.log(JSON.stringify(solve([],0))); // Вывод 3: -1
