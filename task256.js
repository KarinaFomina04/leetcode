/* 🧩 Задача 256. Произведение без текущего элемента. Для каждой позиции верни произведение всех остальных элементов массива целых чисел. Реши за O(n) без деления. Произведение пустого набора равно 1. Все промежуточные произведения помещаются в диапазон безопасных целых JavaScript. Уровень: Middle. */

function solve(nums) {
  const answer = Array(nums.length);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const product = answer[i] * suffix;
    answer[i] = product === 0 ? 0 : product;
    suffix *= nums[i];
  }
  return answer;
}

console.log(JSON.stringify(solve([1,2,3,4]))); // Пример 1: [24,12,8,6]
console.log(JSON.stringify(solve([-1,1,0,-3,3]))); // Пример 2: [0,0,9,0,0]
console.log(JSON.stringify(solve([0,0,2]))); // Пример 3: [0,0,0]
