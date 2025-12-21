/* 📌 Задача 62. Римское число. Переведи корректную запись римского числа в целое число. Уровень: Junior. */

function solve(s) {
  let values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let value = values[s[i]];
    result += value < values[s[i + 1]] ? -value : value;
  }
  return result;
}

console.log(JSON.stringify(solve("MCMXCIV"))); // Вывод 1: 1994
console.log(JSON.stringify(solve("IV"))); // Вывод 2: 4
console.log(JSON.stringify(solve("III"))); // Вывод 3: 3
