/* 📌 Задача 161. Товары в двух корзинах. Найди наибольшую длину непрерывного отрезка массива, в котором не больше двух различных значений. Уровень: Middle. */

function solve(a) {
  let counts = new Map();
  let left = 0;
  let best = 0;
  for (let right = 0; right < a.length; right++) {
    let n = a[right];
    counts.set(n, (counts.get(n) || 0) + 1);
    while (counts.size > 2) {
      let first = a[left++];
      let count = counts.get(first) - 1;
      if (!count) counts.delete(first);
      else counts.set(first, count);
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(JSON.stringify(solve([1,2,1]))); // Вывод 1: 3
console.log(JSON.stringify(solve([0,1,2,2]))); // Вывод 2: 3
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
