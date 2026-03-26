/* 📌 Задача 119. Минимальная сумма пути. В непустой матрице двигайся вправо и вниз. Найди минимальную сумму чисел на пути между противоположными углами. Уровень: Junior. */

function solve(a) {
  let dp = Array(a[0].length).fill(Infinity);
  dp[0] = 0;
  for (let row of a) {
    for (let j = 0; j < row.length; j++) dp[j] = row[j] + Math.min(dp[j], dp[j - 1] ?? Infinity);
  }
  return dp.at(-1);
}

console.log(JSON.stringify(solve([[1,3,1],[1,5,1],[4,2,1]]))); // Вывод 1: 7
console.log(JSON.stringify(solve([[1,2,3]]))); // Вывод 2: 6
console.log(JSON.stringify(solve([[6]]))); // Вывод 3: 6
