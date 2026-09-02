/* ?? ?????? 218. Сумма без сложения. Сложи два знаковых 32-битных числа без операторов + и -. Если сумма выходит из диапазона, верни её знаковое 32-битное представление. ???????: Junior. */

function solve(a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;
    a ^= b;
    b = carry;
  }
  return a;
}

console.log(JSON.stringify(solve(7,5))); // ????? 1: 12
console.log(JSON.stringify(solve(-3,2))); // ????? 2: -1
console.log(JSON.stringify(solve(2147483647,1))); // ????? 3: -2147483648
