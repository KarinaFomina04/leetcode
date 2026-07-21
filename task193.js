/* ?? ?????? 193. Сумма левых листьев. Посчитай сумму значений листьев, которые являются левыми детьми в дереве {v,left,right}. ???????: Junior. */

function solve(node) {
  function sum(current, left) {
    if (!current) return 0;
    if (!current.left && !current.right) return left ? current.v : 0;
    return sum(current.left, true) + sum(current.right, false);
  }
  return sum(node, false);
}

console.log(JSON.stringify(solve({"v":3,"left":{"v":9},"right":{"v":20,"left":{"v":15},"right":{"v":7}}}))); // ????? 1: 24
console.log(JSON.stringify(solve({"v":5}))); // ????? 2: 0
console.log(JSON.stringify(solve(null))); // ????? 3: 0
