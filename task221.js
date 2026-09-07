/* ?? ?????? 221. Спираль из чисел. Заполни квадратную матрицу n на n числами от 1 до n². Начни сверху слева, двигайся вправо и далее по спирали. ???????: Middle. */

function solve(n) {
  let result = Array.from({length: n}, () => Array(n).fill(0));
  let directions = [[0,1],[1,0],[0,-1],[-1,0]];
  let row = 0;
  let column = 0;
  let direction = 0;
  for (let value = 1; value <= n * n; value++) {
    result[row][column] = value;
    let [dr, dc] = directions[direction];
    if (result[row + dr]?.[column + dc] !== 0) direction = (direction + 1) % 4;
    row += directions[direction][0];
    column += directions[direction][1];
  }
  return result;
}

console.log(JSON.stringify(solve(3))); // ????? 1: [[1,2,3],[8,9,4],[7,6,5]]
console.log(JSON.stringify(solve(1))); // ????? 2: [[1]]
console.log(JSON.stringify(solve(0))); // ????? 3: []
