/* ?? ?????? 194. Тропы от корня. Верни все пути от корня до листьев дерева {v,left,right} как массивы значений. Левую ветвь обходи первой. ???????: Middle. */

function solve(node) {
  let result = [];
  let path = [];
  function visit(current) {
    if (!current) return;
    path.push(current.v);
    if (!current.left && !current.right) result.push(path.slice());
    visit(current.left);
    visit(current.right);
    path.pop();
  }
  visit(node);
  return result;
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2,"right":{"v":5}},"right":{"v":3}}))); // ????? 1: [[1,2,5],[1,3]]
console.log(JSON.stringify(solve({"v":7}))); // ????? 2: [[7]]
console.log(JSON.stringify(solve(null))); // ????? 3: []
