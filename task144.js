/* 📌 Задача 144. Диапазон вхождений. В отсортированном массиве найди первый и последний индексы k за логарифмическое время. При отсутствии верни [-1,-1]. Уровень: Middle. */

function solve(a, k) {
  function bound(after) {
    let left = 0;
    let right = a.length;
    while (left < right) {
      let middle = Math.floor((left + right) / 2);
      if (a[middle] < k || (after && a[middle] === k)) left = middle + 1;
      else right = middle;
    }
    return left;
  }
  let first = bound(false);
  return a[first] === k ? [first, bound(true) - 1] : [-1, -1];
}

console.log(JSON.stringify(solve([1,2,2,2,3],2))); // Вывод 1: [1,3]
console.log(JSON.stringify(solve([1,3],2))); // Вывод 2: [-1,-1]
console.log(JSON.stringify(solve([1],1))); // Вывод 3: [0,0]
