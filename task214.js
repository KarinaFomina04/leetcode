/* ?? ?????? 214. Квадраты в сумме. Проверь, представимо ли целое n от 0 до 10¹² как сумма квадратов двух неотрицательных целых чисел. ???????: Middle. */

function solve(n) {
  let left = 0;
  let right = Math.floor(Math.sqrt(n));
  while (left <= right) {
    let sum = left * left + right * right;
    if (sum === n) return true;
    if (sum < n) left++;
    else right--;
  }
  return false;
}

console.log(JSON.stringify(solve(5))); // ????? 1: true
console.log(JSON.stringify(solve(3))); // ????? 2: false
console.log(JSON.stringify(solve(0))); // ????? 3: true
