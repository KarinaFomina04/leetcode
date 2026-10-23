/* 🧩 Задача 248. Нули в конце массива. Перемести все нули в конец массива на месте, сохранив порядок остальных элементов. Верни тот же массив. Уровень: Junior. */

function solve(nums) {
  let write = 0;
  for (const n of nums) {
    if (n !== 0) nums[write++] = n;
  }
  nums.fill(0, write);
  return nums;
}

console.log(JSON.stringify(solve([0,1,0,3,12]))); // Пример 1: [1,3,12,0,0]
console.log(JSON.stringify(solve([0,0]))); // Пример 2: [0,0]
console.log(JSON.stringify(solve([1,2]))); // Пример 3: [1,2]
