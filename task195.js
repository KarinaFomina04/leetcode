/* ?? ?????? 195. Порядковый элемент дерева поиска. Верни k-е по возрастанию значение дерева поиска {v,left,right}. Нумерация с 1, k существует. ???????: Middle. */

function solve(node, k) {
  let stack = [];
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (--k === 0) return node.v;
    node = node.right;
  }
}

console.log(JSON.stringify(solve({"v":3,"left":{"v":1,"right":{"v":2}},"right":{"v":4}},2))); // ????? 1: 2
console.log(JSON.stringify(solve({"v":5},1))); // ????? 2: 5
console.log(JSON.stringify(solve({"v":2,"left":{"v":1},"right":{"v":3}},3))); // ????? 3: 3
