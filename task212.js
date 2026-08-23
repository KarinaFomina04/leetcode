/* ?? ?????? 212. Делители числа. Верни положительные делители положительного целого n в порядке возрастания. ???????: Middle. */

function solve(n) {
  let small = [];
  let large = [];
  for (let i = 1; i <= n / i; i++) {
    if (n % i === 0) {
      small.push(i);
      if (i !== n / i) large.push(n / i);
    }
  }
  return small.concat(large.reverse());
}

console.log(JSON.stringify(solve(12))); // ????? 1: [1,2,3,4,6,12]
console.log(JSON.stringify(solve(9))); // ????? 2: [1,3,9]
console.log(JSON.stringify(solve(1))); // ????? 3: [1]
