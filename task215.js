/* ?? ?????? 215. Расстояние Хэмминга. Посчитай позиции, в которых различаются двоичные биты двух беззнаковых 32-битных чисел. ???????: Junior. */

function solve(a, b) {
  let bits = a ^ b;
  let count = 0;
  while (bits) {
    bits &= bits - 1;
    count++;
  }
  return count;
}

console.log(JSON.stringify(solve(1,4))); // ????? 1: 2
console.log(JSON.stringify(solve(0,4294967295))); // ????? 2: 32
console.log(JSON.stringify(solve(7,7))); // ????? 3: 0
