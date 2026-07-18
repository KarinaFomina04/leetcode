/* ?? ?????? 190. Правый вид дерева. Верни значения самых правых узлов на каждом уровне дерева {v,left,right}, начиная с корня. ???????: Middle. */

function solve(node) {
  let result = [];
  function visit(current, depth) {
    if (!current) return;
    if (depth === result.length) result.push(current.v);
    visit(current.right, depth + 1);
    visit(current.left, depth + 1);
  }
  visit(node, 0);
  return result;
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2,"right":{"v":5}},"right":{"v":3}}))); // ????? 1: [1,3,5]
console.log(JSON.stringify(solve({"v":7}))); // ????? 2: [7]
console.log(JSON.stringify(solve(null))); // ????? 3: []
