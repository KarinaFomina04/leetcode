/* ?? ?????? 216. Побитовое дополнение. Переверни биты в двоичной записи числа от 0 до 2³² − 1 без ведущих нулей. Ноль считаем одним битом. ???????: Junior. */

function solve(n) {
  let mask = 2 ** n.toString(2).length - 1;
  return mask - n;
}

console.log(JSON.stringify(solve(5))); // ????? 1: 2
console.log(JSON.stringify(solve(1))); // ????? 2: 0
console.log(JSON.stringify(solve(0))); // ????? 3: 1
