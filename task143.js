/* 📌 Задача 143. Нижняя граница. В отсортированном массиве найди индекс первого элемента не меньше k. Если его нет, верни длину массива. Уровень: Middle. */

function solve(a, k) {
  let left = 0;
  let right = a.length;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (a[middle] < k) left = middle + 1;
    else right = middle;
  }
  return left;
}

console.log(JSON.stringify(solve([1,2,2,4],2))); // Вывод 1: 1
console.log(JSON.stringify(solve([1,4],5))); // Вывод 2: 2
console.log(JSON.stringify(solve([],2))); // Вывод 3: 0
