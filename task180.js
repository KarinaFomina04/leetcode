/* 📌 Задача 180. Сумма пути до листа. Проверь, есть ли путь от корня до листа с суммой k в дереве с узлами {v,left,right}. Уровень: Junior. */

function solve(node, k) {
  if (!node) return false;
  if (!node.left && !node.right) return node.v === k;
  return solve(node.left, k - node.v) || solve(node.right, k - node.v);
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2},"right":{"v":0}},3))); // Вывод 1: true
console.log(JSON.stringify(solve({"v":1,"left":{"v":2}},1))); // Вывод 2: false
console.log(JSON.stringify(solve(null,0))); // Вывод 3: false
