/* 📌 Задача 134. Длиннейшая возрастающая подпоследовательность. Найди длину строго возрастающей подпоследовательности максимальной длины за O(n log n). Уровень: Middle. */

function solve(a) {
  let tails = [];
  for (let n of a) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if (tails[middle] < n) left = middle + 1;
      else right = middle;
    }
    tails[left] = n;
  }
  return tails.length;
}

console.log(JSON.stringify(solve([10,9,2,5,3,7,101,18]))); // Вывод 1: 4
console.log(JSON.stringify(solve([7,7,7]))); // Вывод 2: 1
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
