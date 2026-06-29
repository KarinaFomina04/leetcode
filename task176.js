/* 📌 Задача 176. Числа в симметричном обходе. Для дерева с узлами {v,left,right} верни значения в порядке левая ветвь, узел, правая ветвь. У пустых ветвей нет узла. Уровень: Middle. */

function solve(node) {
  let result = [];
  let stack = [];
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.v);
    node = node.right;
  }
  return result;
}

console.log(JSON.stringify(solve({"v":2,"left":{"v":1},"right":{"v":3}}))); // Вывод 1: [1,2,3]
console.log(JSON.stringify(solve({"v":5,"right":{"v":7}}))); // Вывод 2: [5,7]
console.log(JSON.stringify(solve(null))); // Вывод 3: []
