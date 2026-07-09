/* 📌 Задача 182. Сбалансированное дерево. Проверь, что у каждого узла дерева высоты левой и правой ветвей отличаются не больше чем на единицу. Уровень: Middle. */

function solve(node) {
  function depth(current) {
    if (!current) return 0;
    let left = depth(current.left);
    let right = depth(current.right);
    if (left < 0 || right < 0 || Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  }
  return depth(node) >= 0;
}

console.log(JSON.stringify(solve({"left":{"left":{}},"right":{}}))); // Вывод 1: true
console.log(JSON.stringify(solve({"left":{"left":{}}}))); // Вывод 2: false
console.log(JSON.stringify(solve(null))); // Вывод 3: true
