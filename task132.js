/* 📌 Задача 132. Цифры телефона. Для строки из цифр 2–9 верни все сочетания букв телефонной клавиатуры по алфавиту. Для пустой строки верни пустой массив. Уровень: Junior. */

function solve(s) {
  if (!s) return [];
  let groups = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  let result = [''];
  for (let digit of s) result = result.flatMap(prefix => [...groups[Number(digit) - 2]].map(c => prefix + c));
  return result;
}

console.log(JSON.stringify(solve("23"))); // Вывод 1: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(JSON.stringify(solve("7"))); // Вывод 2: ["p","q","r","s"]
console.log(JSON.stringify(solve(""))); // Вывод 3: []
