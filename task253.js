/* 🧩 Задача 253. Число островов. В прямоугольной сетке 1 обозначает сушу, а 0 воду. Посчитай острова. Клетки суши принадлежат одному острову, если связаны шагами по вертикали или горизонтали. Уровень: Middle. */

function solve(grid) {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  const seen = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let islands = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0 || seen[row][col]) continue;
      islands++;
      seen[row][col] = true;
      const stack = [[row, col]];
      while (stack.length) {
        const [r, c] = stack.pop();
        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;
          if (grid[nr]?.[nc] !== 1 || seen[nr][nc]) continue;
          seen[nr][nc] = true;
          stack.push([nr, nc]);
        }
      }
    }
  }
  return islands;
}

console.log(JSON.stringify(solve([[1,1,0],[0,1,0],[1,0,1]]))); // Пример 1: 3
console.log(JSON.stringify(solve([[1,0],[0,1]]))); // Пример 2: 2
console.log(JSON.stringify(solve([]))); // Пример 3: 0
