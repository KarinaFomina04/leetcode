/* 📌 Задача 175. Глубина двоичного дерева. Найди глубину дерева, заданного объектами с полями left и right. Пустая ветвь обозначена null или отсутствующим полем. Уровень: Junior. */

function solve(node) {
  if (!node) return 0;
  return 1 + Math.max(solve(node.left), solve(node.right));
}

console.log(JSON.stringify(solve({"left":{"right":{}},"right":{}}))); // Вывод 1: 3
console.log(JSON.stringify(solve({}))); // Вывод 2: 1
console.log(JSON.stringify(solve(null))); // Вывод 3: 0
