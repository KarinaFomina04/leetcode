/* 📌 Задача 181. Диаметр дерева. Найди максимальное число рёбер между двумя узлами двоичного дерева. Узлы имеют поля left и right. Уровень: Middle. */

function solve(node) {
  let best = 0;
  function depth(current) {
    if (!current) return 0;
    let left = depth(current.left);
    let right = depth(current.right);
    best = Math.max(best, left + right);
    return 1 + Math.max(left, right);
  }
  depth(node);
  return best;
}

console.log(JSON.stringify(solve({"left":{"left":{},"right":{}},"right":{}}))); // Вывод 1: 3
console.log(JSON.stringify(solve({}))); // Вывод 2: 0
console.log(JSON.stringify(solve(null))); // Вывод 3: 0
