/* 📌 Задача 167. Инверсии. Посчитай пары индексов i < j с a[i] > a[j] за O(n log n). Уровень: Middle. */

function solve(a) {
  let count = 0;
  function sort(values) {
    if (values.length < 2) return values;
    let middle = Math.floor(values.length / 2);
    let left = sort(values.slice(0, middle));
    let right = sort(values.slice(middle));
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) result.push(left[i++]);
      else {
        count += left.length - i;
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i), right.slice(j));
  }
  sort(a);
  return count;
}

console.log(JSON.stringify(solve([2,4,1,3,5]))); // Вывод 1: 3
console.log(JSON.stringify(solve([3,2,1]))); // Вывод 2: 3
console.log(JSON.stringify(solve([2,2]))); // Вывод 3: 0
