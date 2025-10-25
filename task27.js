/* 📌 Задача 27. Анаграммы. Проверь, совпадают ли частоты букв двух латинских строк. Уровень: Junior. */

function solve(a, b) {
  return [...a].sort().join('') === [...b].sort().join('');
}

console.log(JSON.stringify(solve("listen","silent"))); // Вывод 1: true
console.log(JSON.stringify(solve("aab","abb"))); // Вывод 2: false
console.log(JSON.stringify(solve("",""))); // Вывод 3: true
