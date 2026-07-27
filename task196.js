/* ?? ?????? 196. Ближайший общий предок. В дереве поиска с различными значениями найди ближайшего общего предка узлов со значениями a и b. Оба узла существуют, узел считается своим предком. ???????: Junior. */

function solve(node, a, b) {
  let low = Math.min(a, b);
  let high = Math.max(a, b);
  while (node.v < low || node.v > high) {
    node = node.v < low ? node.right : node.left;
  }
  return node.v;
}

console.log(JSON.stringify(solve({"v":6,"left":{"v":2,"right":{"v":4}},"right":{"v":8}},2,8))); // ????? 1: 6
console.log(JSON.stringify(solve({"v":6,"left":{"v":2,"right":{"v":4}}},2,4))); // ????? 2: 2
console.log(JSON.stringify(solve({"v":1},1,1))); // ????? 3: 1
