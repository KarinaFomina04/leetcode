/* 📌 Задача 118. Пути с препятствиями. Посчитай пути вправо и вниз между противоположными углами непустой двоичной матрицы. Единицы задают препятствия. Уровень: Junior. */

function solve(a) {
  let dp = Array(a[0].length).fill(0);
  dp[0] = 1;
  for (let row of a) {
    for (let j = 0; j < row.length; j++) dp[j] = row[j] ? 0 : dp[j] + (dp[j - 1] ?? 0);
  }
  return dp.at(-1);
}

console.log(JSON.stringify(solve([[0,0,0],[0,1,0],[0,0,0]]))); // Вывод 1: 2
console.log(JSON.stringify(solve([[1]]))); // Вывод 2: 0
console.log(JSON.stringify(solve([[0]]))); // Вывод 3: 1
