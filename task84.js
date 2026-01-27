/* 📌 Задача 84. Глубина скобок. Найди максимальную глубину вложения круглых скобок в корректной строке. Остальные символы игнорируй. Уровень: Junior. */

function solve(s) {
  let depth = 0;
  let best = 0;
  for (let char of s) {
    if (char === '(') best = Math.max(best, ++depth);
    if (char === ')') depth--;
  }
  return best;
}

console.log(JSON.stringify(solve("(a(b)c)"))); // Вывод 1: 2
console.log(JSON.stringify(solve("()()"))); // Вывод 2: 1
console.log(JSON.stringify(solve("abc"))); // Вывод 3: 0
