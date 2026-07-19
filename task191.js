/* ?? ?????? 191. Одинаковые деревья. Проверь, что два двоичных дерева {v,left,right} имеют одинаковую структуру и одинаковые значения. ???????: Junior. */

function solve(a, b) {
  if (!a || !b) return !a && !b;
  return a.v === b.v && solve(a.left, b.left) && solve(a.right, b.right);
}

console.log(JSON.stringify(solve({"v":1,"left":{"v":2}},{"v":1,"left":{"v":2}}))); // ????? 1: true
console.log(JSON.stringify(solve({"v":1,"left":{"v":2}},{"v":1,"right":{"v":2}}))); // ????? 2: false
console.log(JSON.stringify(solve(null,null))); // ????? 3: true
