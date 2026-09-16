/* ?? ?????? 227. Седловые элементы. Верни значения клеток, которые минимальны в своей строке и максимальны в своём столбце. Обходи матрицу построчно. ???????: Middle. */

function solve(a) {
  let width = a[0]?.length ?? 0;
  let maximums = Array(width).fill(-Infinity);
  let minimums = [];
  for (let row of a) {
    let min = Infinity;
    for (let j = 0; j < width; j++) {
      min = Math.min(min, row[j]);
      maximums[j] = Math.max(maximums[j], row[j]);
    }
    minimums.push(min);
  }
  return a.flatMap((row, i) => row.filter((n, j) => n === minimums[i] && n === maximums[j]));
}

console.log(JSON.stringify(solve([[3,7,8],[9,11,13],[15,16,17]]))); // ????? 1: [15]
console.log(JSON.stringify(solve([[2,2],[2,1]]))); // ????? 2: [2,2]
console.log(JSON.stringify(solve([]))); // ????? 3: []
