/* 📌 Задача 44. Быстрая степень. Вычисли x в целой степени n. Для нулевого x степень неотрицательная. Уровень: Middle. */

function solve(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  while (n > 0) {
    if (n % 2) result *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return result;
}

console.log(JSON.stringify(solve(2,10))); // Вывод 1: 1024
console.log(JSON.stringify(solve(2,-3))); // Вывод 2: 0.125
console.log(JSON.stringify(solve(5,0))); // Вывод 3: 1
