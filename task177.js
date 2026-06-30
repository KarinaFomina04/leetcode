/* 📌 Задача 177. Уровни дерева. Верни значения дерева с узлами {v,left,right} по уровням, слева направо на каждом уровне. Уровень: Middle. */

function solve(node) {
  if (!node) return [];
  let result = [];
  let queue = [node];
  let i = 0;
  while (i < queue.length) {
    let end = queue.length;
    let level = [];
    while (i < end) {
      let current = queue[i++];
      level.push(current.v);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(level);
  }
  return result;
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2},"right":{"v":3,"right":{"v":4}}}))); // Вывод 1: [[1],[2,3],[4]]
console.log(JSON.stringify(solve({"v":0}))); // Вывод 2: [[0]]
console.log(JSON.stringify(solve(null))); // Вывод 3: []
