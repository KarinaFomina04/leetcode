/* ?? ?????? 235. Падающий путь. Найди минимальную сумму падающего пути в непустой прямоугольной матрице. Стартуй в любой клетке первой строки. В следующей строке оставайся в том же столбце или сместись на один. ???????: Junior. */

function solve(a) {
  let previous = a[0].slice();
  for (let i = 1; i < a.length; i++) {
    previous = a[i].map((n, j) => n + Math.min(previous[j - 1] ?? Infinity, previous[j], previous[j + 1] ?? Infinity));
  }
  return previous.reduce((best, n) => Math.min(best, n), Infinity);
}

console.log(JSON.stringify(solve([[2,1,3],[6,5,4],[7,8,9]]))); // ????? 1: 13
console.log(JSON.stringify(solve([[-19,57],[-40,-5]]))); // ????? 2: -59
console.log(JSON.stringify(solve([[2],[4]]))); // ????? 3: 6
