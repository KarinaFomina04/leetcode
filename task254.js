/* 🧩 Задача 254. Следующая перестановка. Преобразуй массив целых чисел на месте в следующую лексикографическую перестановку. Если текущая последняя, получи первую. Верни тот же массив. Уровень: Middle. */

function solve(nums) {
  let pivot = nums.length - 2;
  while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) pivot--;
  if (pivot >= 0) {
    let next = nums.length - 1;
    while (nums[next] <= nums[pivot]) next--;
    [nums[pivot], nums[next]] = [nums[next], nums[pivot]];
  }
  for (let left = Math.max(0, pivot + 1), right = nums.length - 1; left < right; left++, right--) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
}

console.log(JSON.stringify(solve([1,2,3]))); // Пример 1: [1,3,2]
console.log(JSON.stringify(solve([3,2,1]))); // Пример 2: [1,2,3]
console.log(JSON.stringify(solve([1,5,1]))); // Пример 3: [5,1,1]
