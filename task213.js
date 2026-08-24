/* ?? ?????? 213. Число с тремя множителями. Проверь, можно ли получить положительное целое n умножением только на 2, 3 и 5, начиная с единицы. ???????: Junior. */

function solve(n) {
  for (let factor of [2, 3, 5]) while (n % factor === 0) n /= factor;
  return n === 1;
}

console.log(JSON.stringify(solve(6))); // ????? 1: true
console.log(JSON.stringify(solve(14))); // ????? 2: false
console.log(JSON.stringify(solve(1))); // ????? 3: true
