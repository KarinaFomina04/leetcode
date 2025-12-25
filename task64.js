/* 📌 Задача 64. Номер столбца. Переведи обозначение столбца таблицы из заглавных латинских букв в номер. Результат безопасный. Уровень: Junior. */

function solve(s) {
  let value = 0;
  for (let char of s) value = value * 26 + (char.charCodeAt(0) - 64);
  return value;
}

console.log(JSON.stringify(solve("A"))); // Вывод 1: 1
console.log(JSON.stringify(solve("AA"))); // Вывод 2: 27
console.log(JSON.stringify(solve("ZY"))); // Вывод 3: 701
