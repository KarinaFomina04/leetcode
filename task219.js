/* ?? ?????? 219. Два одиночных числа. В массиве знаковых 32-битных чисел ровно два значения встречаются по одному разу, остальные дважды. Верни оба по возрастанию. ???????: Junior. */

function solve(a) {
  let xor = a.reduce((value, n) => value ^ n, 0);
  let bit = xor & -xor;
  let first = 0;
  for (let n of a) if (n & bit) first ^= n;
  let second = first ^ xor;
  return first < second ? [first, second] : [second, first];
}

console.log(JSON.stringify(solve([1,2,1,3,2,5]))); // ????? 1: [3,5]
console.log(JSON.stringify(solve([0,-1]))); // ????? 2: [-1,0]
console.log(JSON.stringify(solve([-2147483648,0,2,2]))); // ????? 3: [-2147483648,0]
