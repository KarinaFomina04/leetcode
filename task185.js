/* 📌 Задача 185. Разворот списка. Разверни односвязный список с узлами {v,next} на месте и верни новую голову. Пустая ссылка обозначена null или отсутствующим полем. Уровень: Middle. */

function solve(node) {
  let previous = null;
  while (node) {
    let next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }
  return previous;
}

console.log(JSON.stringify(solve({"v":1,"next":{"v":2,"next":{"v":3}}}))); // Вывод 1: {"v":3,"next":{"v":2,"next":{"v":1,"next":null}}}
console.log(JSON.stringify(solve({"v":4}))); // Вывод 2: {"v":4,"next":null}
console.log(JSON.stringify(solve(null))); // Вывод 3: null
