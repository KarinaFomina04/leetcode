/* ?? ?????? 192. Обмен ветвей дерева. Поменяй левую и правую ветви у каждого узла дерева {v,left,right}. Пустые ветви в результате обозначь null. ???????: Junior. */

function solve(node) {
  if (!node) return null;
  return {v: node.v, left: solve(node.right), right: solve(node.left)};
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2}}))); // ????? 1: {"v":1,"left":null,"right":{"v":2,"left":null,"right":null}}
console.log(JSON.stringify(solve({"v":3}))); // ????? 2: {"v":3,"left":null,"right":null}
console.log(JSON.stringify(solve(null))); // ????? 3: null
