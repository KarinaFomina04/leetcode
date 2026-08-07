/* ?? ?????? 203. Удаление цифр. Удали ровно k цифр из строки, чтобы получить минимальное число. Порядок оставшихся цифр не меняй. Верни строку без ведущих нулей или "0". ???????: Middle. */

function solve(s, k) {
  let stack = [];
  for (let digit of s) {
    while (k > 0 && stack.at(-1) > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  stack.length -= k;
  return stack.join('').replace(/^0+/, '') || '0';
}

console.log(JSON.stringify(solve("1432219",3))); // ????? 1: "1219"
console.log(JSON.stringify(solve("10200",1))); // ????? 2: "200"
console.log(JSON.stringify(solve("10",2))); // ????? 3: "0"
