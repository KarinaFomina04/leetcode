/* 🧩 Задача 246. Индекс равновесия. Верни первый индекс, для которого сумма элементов слева равна сумме элементов справа. Если такого индекса нет, верни -1. Сумма пустой части равна 0. Уровень: Junior. */

function solve(nums) {
  const total = nums.reduce((sum, n) => sum + n, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i;
    left += nums[i];
  }
  return -1;
}

console.log(JSON.stringify(solve([1,7,3,6,5,6]))); // Пример 1: 3
console.log(JSON.stringify(solve([1,2,3]))); // Пример 2: -1
console.log(JSON.stringify(solve([0,0]))); // Пример 3: 0
