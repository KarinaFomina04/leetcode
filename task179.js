/* 📌 Задача 179. Зеркальное дерево. Проверь, зеркальны ли левая и правая ветви дерева с узлами {v,left,right}. Уровень: Junior. */

function solve(node) {
  function mirror(a, b) {
    if (!a || !b) return !a && !b;
    return a.v === b.v && mirror(a.left, b.right) && mirror(a.right, b.left);
  }
  return !node || mirror(node.left, node.right);
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2,"right":{"v":3}},"right":{"v":2,"left":{"v":3}}}))); // Вывод 1: true
console.log(JSON.stringify(solve({"v":1,"left":{"v":2}}))); // Вывод 2: false
console.log(JSON.stringify(solve(null))); // Вывод 3: true
