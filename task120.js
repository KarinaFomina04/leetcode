/* 📌 Задача 120. Путь по треугольнику. Найди минимальную сумму от вершины непустого треугольника до основания. Из позиции j можно перейти в j или j + 1 в следующей строке. Уровень: Junior. */

function solve(a) {
  let dp = a.at(-1).slice();
  for (let i = a.length - 2; i >= 0; i--) {
    for (let j = 0; j < a[i].length; j++) dp[j] = a[i][j] + Math.min(dp[j], dp[j + 1]);
  }
  return dp[0];
}

console.log(JSON.stringify(solve([[2],[3,4],[6,5,7],[4,1,8,3]]))); // Вывод 1: 11
console.log(JSON.stringify(solve([[-10]]))); // Вывод 2: -10
console.log(JSON.stringify(solve([[1],[2,1]]))); // Вывод 3: 2
