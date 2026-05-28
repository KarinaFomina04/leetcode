/* 📌 Задача 157. Прибавление на отрезках. Есть массив из n нулей. Для каждой операции [l,r,k] прибавь k на отрезке от l до r включительно. Верни итоговый массив за O(n + число операций). Уровень: Junior. */

function solve(n, a) {
  let values = Array(n + 1).fill(0);
  for (let [l, r, k] of a) {
    values[l] += k;
    values[r + 1] -= k;
  }
  let sum = 0;
  return values.slice(0, n).map(n => sum += n);
}

console.log(JSON.stringify(solve(5,[[1,3,2],[2,4,3]]))); // Вывод 1: [0,2,5,5,3]
console.log(JSON.stringify(solve(3,[[0,2,-1]]))); // Вывод 2: [-1,-1,-1]
console.log(JSON.stringify(solve(0,[]))); // Вывод 3: []
