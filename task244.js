/* 🧩 Задача 244. Самый короткий подмассив. Даны положительное целое target и массив положительных целых nums. Верни длину самого короткого непустого подмассива с суммой не меньше target или 0, если такого подмассива нет. Уровень: Middle. */

function solve(target, nums) {
  let left = 0;
  let sum = 0;
  let best = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= nums[left++];
    }
  }
  return best === Infinity ? 0 : best;
}

console.log(JSON.stringify(solve(7, [2,3,1,2,4,3]))); // Пример 1: 2
console.log(JSON.stringify(solve(4, [1,4,4]))); // Пример 2: 1
console.log(JSON.stringify(solve(11, [1,2,3]))); // Пример 3: 0
