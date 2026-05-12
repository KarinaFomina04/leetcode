/* 📌 Задача 147. Пропущенные положительные числа. Дан строго возрастающий массив положительных чисел. Найди k-е отсутствующее положительное число, где k ≥ 1. Уровень: Middle. */

function solve(a, k) {
  let left = 0;
  let right = a.length;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (a[middle] - middle - 1 < k) left = middle + 1;
    else right = middle;
  }
  return left + k;
}

console.log(JSON.stringify(solve([2,3,4,7,11],5))); // Вывод 1: 9
console.log(JSON.stringify(solve([1,2,3,4],2))); // Вывод 2: 6
console.log(JSON.stringify(solve([],1))); // Вывод 3: 1
