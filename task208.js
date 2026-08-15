/* ?? ?????? 208. Самые частые числа. Верни k различных наиболее частых чисел в порядке убывания частоты. При равенстве меньшие числа идут первыми. ???????: Junior. */

function solve(a, k) {
  let counts = new Map();
  for (let n of a) counts.set(n, (counts.get(n) || 0) + 1);
  return [...counts.keys()].sort((x, y) => counts.get(y) - counts.get(x) || x - y).slice(0, k);
}

console.log(JSON.stringify(solve([1,1,1,2,2,3],2))); // ????? 1: [1,2]
console.log(JSON.stringify(solve([4,5,5,4,3,3],2))); // ????? 2: [3,4]
console.log(JSON.stringify(solve([],0))); // ????? 3: []
