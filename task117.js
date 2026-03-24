/* 📌 Задача 117. Пути по сетке. Для сетки из r строк и c столбцов посчитай пути из верхнего левого угла в нижний правый, двигаясь вниз или вправо. Размеры положительны, ответ безопасный. Уровень: Junior. */

function solve(r, c) {
  let dp = Array(c).fill(1);
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) dp[j] += dp[j - 1];
  }
  return dp[c - 1];
}

console.log(JSON.stringify(solve(3,7))); // Вывод 1: 28
console.log(JSON.stringify(solve(1,4))); // Вывод 2: 1
console.log(JSON.stringify(solve(2,2))); // Вывод 3: 2
