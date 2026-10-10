/* ?? ?????? 240. Непрерывный подъём. Найди длину самой длинной строго возрастающей непрерывной части массива. ???????: Junior. */

function solve(a) {
  let size = 0;
  let best = 0;
  for (let i = 0; i < a.length; i++) {
    size = i > 0 && a[i - 1] < a[i] ? size + 1 : 1;
    best = Math.max(best, size);
  }
  return best;
}

console.log(JSON.stringify(solve([1,3,5,4,7]))); // ????? 1: 3
console.log(JSON.stringify(solve([2,2]))); // ????? 2: 1
console.log(JSON.stringify(solve([]))); // ????? 3: 0
