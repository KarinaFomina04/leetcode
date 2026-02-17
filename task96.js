/* 📌 Задача 96. Следующая перестановка. Верни следующую лексикографическую перестановку чисел. Для последней верни первую. Уровень: Middle. */

function solve(a) {
  if (a.length < 2) return a.slice();
  let i = a.length - 2;
  while (i >= 0 && a[i] >= a[i + 1]) i--;
  if (i >= 0) {
    let j = a.length - 1;
    while (a[j] <= a[i]) j--;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, i + 1).concat(a.slice(i + 1).reverse());
}

console.log(JSON.stringify(solve([1,2,3]))); // Вывод 1: [1,3,2]
console.log(JSON.stringify(solve([3,2,1]))); // Вывод 2: [1,2,3]
console.log(JSON.stringify(solve([1,5,1]))); // Вывод 3: [5,1,1]
