/* 📌 Задача 82. Короткий подмассив. Для массива положительных чисел найди минимальную длину подмассива с суммой не меньше положительного k. Без решения верни 0. Уровень: Middle. */

function solve(a, k) {
  let left = 0;
  let sum = 0;
  let best = Infinity;
  for (let right = 0; right < a.length; right++) {
    sum += a[right];
    while (sum >= k) {
      best = Math.min(best, right - left + 1);
      sum -= a[left++];
    }
  }
  return best === Infinity ? 0 : best;
}

console.log(JSON.stringify(solve([2,3,1,2,4,3],7))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,1],3))); // Вывод 2: 0
console.log(JSON.stringify(solve([5],5))); // Вывод 3: 1
