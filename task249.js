/* 🧩 Задача 249. Сумма подмассивов. Посчитай непустые непрерывные подмассивы целых чисел с суммой ровно k. В массиве могут быть отрицательные числа. Уровень: Middle. */

function solve(nums, k) {
  const counts = new Map([[0, 1]]);
  let prefix = 0;
  let answer = 0;
  for (const n of nums) {
    prefix += n;
    answer += counts.get(prefix - k) ?? 0;
    counts.set(prefix, (counts.get(prefix) ?? 0) + 1);
  }
  return answer;
}

console.log(JSON.stringify(solve([1,1,1], 2))); // Пример 1: 2
console.log(JSON.stringify(solve([1,-1,0], 0))); // Пример 2: 3
console.log(JSON.stringify(solve([], 0))); // Пример 3: 0
