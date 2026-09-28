/* ?? ?????? 234. Продажа с паузой. Найди максимальную прибыль по массиву цен. После продажи на следующий день покупать нельзя. Одновременно можно держать одну акцию. ???????: Junior. */

function solve(a) {
  let rest = 0;
  let sold = -Infinity;
  let held = -Infinity;
  for (let price of a) {
    [rest, sold, held] = [Math.max(rest, sold), held + price, Math.max(held, rest - price)];
  }
  return Math.max(rest, sold);
}

console.log(JSON.stringify(solve([1,2,3,0,2]))); // ????? 1: 3
console.log(JSON.stringify(solve([2,1]))); // ????? 2: 0
console.log(JSON.stringify(solve([]))); // ????? 3: 0
