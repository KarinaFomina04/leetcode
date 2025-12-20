/* 📌 Задача 61. Сложение двоичных строк. Сложи два числа, заданных двоичными строками без ведущих нулей. Верни двоичную строку. Уровень: Middle. */

function solve(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];
  while (i >= 0 || j >= 0 || carry) {
    let sum = Number(a[i--] ?? 0) + Number(b[j--] ?? 0) + carry;
    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }
  return result.reverse().join('');
}

console.log(JSON.stringify(solve("1010","1011"))); // Вывод 1: "10101"
console.log(JSON.stringify(solve("0","0"))); // Вывод 2: "0"
console.log(JSON.stringify(solve("1","111"))); // Вывод 3: "1000"
