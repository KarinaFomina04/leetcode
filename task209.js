/* ?? ?????? 209. Верные монеты. Дано n монет. Первая строка требует одну монету, вторая две и далее. Найди число полных строк. 0 ≤ n ≤ 10¹². ???????: Middle. */

function solve(n) {
  let left = 0;
  let right = n;
  while (left < right) {
    let middle = Math.ceil((left + right) / 2);
    if (middle <= Math.floor(2 * n / (middle + 1))) left = middle;
    else right = middle - 1;
  }
  return left;
}

console.log(JSON.stringify(solve(5))); // ????? 1: 2
console.log(JSON.stringify(solve(8))); // ????? 2: 3
console.log(JSON.stringify(solve(0))); // ????? 3: 0
