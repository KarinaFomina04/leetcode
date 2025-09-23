/* 📌 Задача 9. Второй максимум. Верни второй по величине различный элемент или null. Уровень: Middle. */

function solve(a) {
  let first = -Infinity;
  let second = -Infinity;
  for (let n of a) {
    if (n > first) {
      second = first;
      first = n;
    } else if (n < first && n > second) second = n;
  }
  return second === -Infinity ? null : second;
}

console.log(JSON.stringify(solve([5,5,2,3]))); // Вывод 1: 3
console.log(JSON.stringify(solve([-2,-5]))); // Вывод 2: -5
console.log(JSON.stringify(solve([7,7]))); // Вывод 3: null
