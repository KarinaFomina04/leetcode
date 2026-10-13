/* ?? ?????? 243. Круговой максимум суммы. В непустом массиве, замкнутом в кольцо, найди максимальную сумму непустого непрерывного участка. Один индекс можно использовать не больше одного раза. ???????: Middle. */

function solve(a) {
  let total = a[0];
  let high = a[0];
  let low = a[0];
  let best = high;
  let worst = low;
  for (let n of a.slice(1)) {
    total += n;
    high = Math.max(n, high + n);
    low = Math.min(n, low + n);
    best = Math.max(best, high);
    worst = Math.min(worst, low);
  }
  return best < 0 ? best : Math.max(best, total - worst);
}

console.log(JSON.stringify(solve([5,-3,5]))); // ????? 1: 10
console.log(JSON.stringify(solve([-3,-2,-3]))); // ????? 2: -2
console.log(JSON.stringify(solve([1,-2,3,-2]))); // ????? 3: 3
