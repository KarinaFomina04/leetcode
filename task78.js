/* 📌 Задача 78. Строка с пробелами. Найди длину последнего слова в строке из латинских букв и пробелов. При отсутствии слов верни 0. Уровень: Junior. */

function solve(s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') i--;
  let end = i;
  while (i >= 0 && s[i] !== ' ') i--;
  return end - i;
}

console.log(JSON.stringify(solve("hello world   "))); // Вывод 1: 5
console.log(JSON.stringify(solve("   "))); // Вывод 2: 0
console.log(JSON.stringify(solve("x"))); // Вывод 3: 1
