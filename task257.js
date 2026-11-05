/* 🧩 Задача 257. Длина возрастающей подпоследовательности. Найди длину самой длинной строго возрастающей подпоследовательности массива. Элементы можно пропускать, сохраняя их исходный порядок. Уровень: Middle. */

function solve(nums) {
  const tails = [];
  for (const n of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < n) left = mid + 1;
      else right = mid;
    }
    tails[left] = n;
  }
  return tails.length;
}

console.log(JSON.stringify(solve([10,9,2,5,3,7,101,18]))); // Пример 1: 4
console.log(JSON.stringify(solve([7,7,7]))); // Пример 2: 1
console.log(JSON.stringify(solve([]))); // Пример 3: 0
