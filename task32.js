/* 📌 Задача 32. Разворот слов. Верни слова строки в обратном порядке, разделив их одним пробелом. Уровень: Junior. */

function solve(s) {
  return s.trim().split(/ +/).reverse().join(' ');
}

console.log(JSON.stringify(solve("  hello  world "))); // Вывод 1: "world hello"
console.log(JSON.stringify(solve("one"))); // Вывод 2: "one"
console.log(JSON.stringify(solve("   "))); // Вывод 3: ""
