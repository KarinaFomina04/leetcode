/* 📌 Задача 178. Проверка дерева поиска. Проверь, что в дереве с узлами {v,left,right} все числа в левой ветви каждого узла меньше его значения, а в правой больше. Дубли запрещены. Уровень: Junior. */

function solve(node) {
  function check(current, low, high) {
    if (!current) return true;
    return current.v > low && current.v < high && check(current.left, low, current.v) && check(current.right, current.v, high);
  }
  return check(node, -Infinity, Infinity);
}

console.log(JSON.stringify(solve({"v":2,"left":{"v":1},"right":{"v":3}}))); // Вывод 1: true
console.log(JSON.stringify(solve({"v":5,"left":{"v":2,"right":{"v":6}}}))); // Вывод 2: false
console.log(JSON.stringify(solve({"v":1,"left":{"v":1}}))); // Вывод 3: false
