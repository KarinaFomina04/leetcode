/* ?? ?????? 225. Изменение формы матрицы. Переложи элементы прямоугольной матрицы построчно в матрицу r на c. Если размеры несовместимы, верни исходную матрицу. r и c положительны. ???????: Junior. */

function solve(a, r, c) {
  if (a.length * (a[0]?.length ?? 0) !== r * c) return a;
  let values = a.flat();
  return Array.from({length: r}, (_, i) => values.slice(i * c, (i + 1) * c));
}

console.log(JSON.stringify(solve([[1,2],[3,4]],1,4))); // ????? 1: [[1,2,3,4]]
console.log(JSON.stringify(solve([[1,2]],2,2))); // ????? 2: [[1,2]]
console.log(JSON.stringify(solve([[1,2]],2,1))); // ????? 3: [[1],[2]]
