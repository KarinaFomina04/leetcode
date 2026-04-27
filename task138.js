/* 📌 Задача 138. Равные половины. Проверь, можно ли разбить массив неотрицательных целых чисел на две части с одинаковой суммой. Уровень: Middle. */

function solve(a) {
  let sum = a.reduce((total, n) => total + n, 0);
  if (sum % 2) return false;
  let target = sum / 2;
  let dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (let n of a) {
    for (let i = target; i >= n; i--) dp[i] ||= dp[i - n];
  }
  return dp[target];
}

console.log(JSON.stringify(solve([1,5,11,5]))); // Вывод 1: true
console.log(JSON.stringify(solve([1,2,3,5]))); // Вывод 2: false
console.log(JSON.stringify(solve([2,6]))); // Вывод 3: false
