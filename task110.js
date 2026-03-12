/* 📌 Задача 110. Полностью отсортированная матрица. Найди k за логарифмическое время. Строки матрицы отсортированы, каждая начинается с числа больше последнего числа предыдущей. Уровень: Middle. */

function solve(a, k) {
  let width = a[0]?.length ?? 0;
  let left = 0;
  let right = a.length * width - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let value = a[Math.floor(middle / width)][middle % width];
    if (value === k) return true;
    if (value < k) left = middle + 1;
    else right = middle - 1;
  }
  return false;
}

console.log(JSON.stringify(solve([[1,3,5],[7,9,11]],7))); // Вывод 1: true
console.log(JSON.stringify(solve([[1,3],[5,7]],4))); // Вывод 2: false
console.log(JSON.stringify(solve([],1))); // Вывод 3: false
