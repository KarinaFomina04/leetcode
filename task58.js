/* 📌 Задача 58. Простые множители. Разложи положительное целое число на простые множители по возрастанию с учётом повторов. Уровень: Middle. */

function solve(n) {
  let result = [];
  for (let i = 2; i <= n / i; i++) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }
  if (n > 1) result.push(n);
  return result;
}

console.log(JSON.stringify(solve(84))); // Вывод 1: [2,2,3,7]
console.log(JSON.stringify(solve(13))); // Вывод 2: [13]
console.log(JSON.stringify(solve(1))); // Вывод 3: []
