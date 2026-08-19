/* ?? ?????? 210. Степень тройки. Проверь, является ли безопасное целое число степенью тройки. ???????: Junior. */

function solve(n) {
  if (n < 1) return false;
  while (n % 3 === 0) n /= 3;
  return n === 1;
}

console.log(JSON.stringify(solve(27))); // ????? 1: true
console.log(JSON.stringify(solve(45))); // ????? 2: false
console.log(JSON.stringify(solve(1))); // ????? 3: true
