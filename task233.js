/* ?? ?????? 233. Продажа с комиссией. Найди максимальную прибыль по массиву цен, если за каждую продажу платится комиссия fee. Одновременно можно держать одну акцию. ???????: Junior. */

function solve(a, fee) {
  let cash = 0;
  let held = -Infinity;
  for (let price of a) {
    [cash, held] = [Math.max(cash, held + price - fee), Math.max(held, cash - price)];
  }
  return cash;
}

console.log(JSON.stringify(solve([1,3,2,8,4,9],2))); // ????? 1: 8
console.log(JSON.stringify(solve([9,6,3],1))); // ????? 2: 0
console.log(JSON.stringify(solve([],2))); // ????? 3: 0
