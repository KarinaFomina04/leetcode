/* ?? ?????? 189. Минимальная глубина дерева. Найди число узлов в самом коротком пути от корня до листа. Ветви заданы полями left и right. ???????: Middle. */

function solve(node) {
  if (!node) return 0;
  let queue = [[node, 1]];
  for (let i = 0; i < queue.length; i++) {
    let [current, depth] = queue[i];
    if (!current.left && !current.right) return depth;
    if (current.left) queue.push([current.left, depth + 1]);
    if (current.right) queue.push([current.right, depth + 1]);
  }
}

console.log(JSON.stringify(solve({"left":{"left":{}},"right":{}}))); // ????? 1: 2
console.log(JSON.stringify(solve({"left":{}}))); // ????? 2: 2
console.log(JSON.stringify(solve(null))); // ????? 3: 0
