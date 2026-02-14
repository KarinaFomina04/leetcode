/* 📌 Задача 95. Сумма пар в диапазоне. Посчитай пары индексов i < j с суммой от l до r включительно, где l ≤ r. Уровень: Middle. */

function solve(a, l, r) {
  a = a.slice().sort((x, y) => x - y);
  function count(limit, inclusive) {
    let left = 0;
    let right = a.length - 1;
    let result = 0;
    while (left < right) {
      let sum = a[left] + a[right];
      if (sum < limit || (inclusive && sum === limit)) result += right - left++;
      else right--;
    }
    return result;
  }
  return count(r, true) - count(l, false);
}

console.log(JSON.stringify(solve([0,1,7,4,4,5],3,6))); // Вывод 1: 6
console.log(JSON.stringify(solve([1,1,1],2,2))); // Вывод 2: 3
console.log(JSON.stringify(solve([],0,0))); // Вывод 3: 0
