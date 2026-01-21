/* 📌 Задача 81. Максимальная сумма окна. Найди наибольшую сумму непрерывного подмассива длины k. 1 ≤ k ≤ длине массива. Уровень: Junior. */

function solve(a, k) {
  let sum = a.slice(0, k).reduce((total, n) => total + n, 0);
  let best = sum;
  for (let i = k; i < a.length; i++) {
    sum += a[i] - a[i - k];
    best = Math.max(best, sum);
  }
  return best;
}

console.log(JSON.stringify(solve([1,4,2,10,2,3],3))); // Вывод 1: 16
console.log(JSON.stringify(solve([-3,-1,-5],2))); // Вывод 2: -4
console.log(JSON.stringify(solve([7],1))); // Вывод 3: 7
