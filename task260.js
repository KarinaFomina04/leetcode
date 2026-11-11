/* 🧩 Задача 260. Одинокие числа. В массиве ровно два разных целых числа встречаются по одному разу, а все остальные по два раза. Все числа знаковые 32-битные. Верни два одиноких числа по возрастанию за O(n) времени и O(1) дополнительной памяти. Уровень: Middle. */

function solve(nums) {
  let difference = 0;
  for (const n of nums) difference ^= n;
  const bit = difference & -difference;
  let first = 0;
  for (const n of nums) {
    if ((n & bit) !== 0) first ^= n;
  }
  const second = difference ^ first;
  return first < second ? [first, second] : [second, first];
}

console.log(JSON.stringify(solve([1,2,1,3,2,5]))); // Пример 1: [3,5]
console.log(JSON.stringify(solve([-1,0]))); // Пример 2: [-1,0]
console.log(JSON.stringify(solve([-2147483648,0,7,7]))); // Пример 3: [-2147483648,0]
