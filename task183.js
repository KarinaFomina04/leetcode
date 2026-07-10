/* 📌 Задача 183. Сложение списков. Два непустых связанных списка из узлов {v,next} содержат цифры от младшей к старшей. Верни цифры суммы массивом в том же порядке. Уровень: Middle. */

function solve(a, b) {
  let result = [];
  let carry = 0;
  while (a || b || carry) {
    let sum = (a?.v ?? 0) + (b?.v ?? 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    a = a?.next;
    b = b?.next;
  }
  return result;
}

console.log(JSON.stringify(solve({"v":2,"next":{"v":4,"next":{"v":3}}},{"v":5,"next":{"v":6,"next":{"v":4}}}))); // Вывод 1: [7,0,8]
console.log(JSON.stringify(solve({"v":9},{"v":1}))); // Вывод 2: [0,1]
console.log(JSON.stringify(solve({"v":0},{"v":0}))); // Вывод 3: [0]
