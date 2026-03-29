/* 📌 Задача 121. Треугольник Паскаля. Построй первые n строк треугольника Паскаля. 0 ≤ n ≤ 50. Уровень: Junior. */

function solve(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let row = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) row[j] = result[i - 1][j - 1] + result[i - 1][j];
    result.push(row);
  }
  return result;
}

console.log(JSON.stringify(solve(4))); // Вывод 1: [[1],[1,1],[1,2,1],[1,3,3,1]]
console.log(JSON.stringify(solve(1))); // Вывод 2: [[1]]
console.log(JSON.stringify(solve(0))); // Вывод 3: []
