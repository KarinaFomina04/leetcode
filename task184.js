/* 📌 Задача 184. Середина списка. Верни значение среднего узла списка из узлов {v,next}. Если средних два, верни второй. Для пустого списка верни null. Уровень: Junior. */

function solve(node) {
  let slow = node;
  let fast = node;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow?.v ?? null;
}

console.log(JSON.stringify(solve({"v":1,"next":{"v":2,"next":{"v":3}}}))); // Вывод 1: 2
console.log(JSON.stringify(solve({"v":1,"next":{"v":2}}))); // Вывод 2: 2
console.log(JSON.stringify(solve(null))); // Вывод 3: null
