/* 📌 Задача 155. Порядок букв по шаблону. Расположи буквы строки s в порядке, указанном в строке order из различных букв. Прочие буквы оставь в исходном порядке после них. Уровень: Junior. */

function solve(s, order) {
  let counts = new Map();
  for (let c of s) counts.set(c, (counts.get(c) || 0) + 1);
  let result = '';
  let ordered = new Set(order);
  for (let c of order) result += c.repeat(counts.get(c) || 0);
  return result + [...s].filter(c => !ordered.has(c)).join('');
}

console.log(JSON.stringify(solve("abcdc","cba"))); // Вывод 1: "ccbad"
console.log(JSON.stringify(solve("xzyx","y"))); // Вывод 2: "yxzx"
console.log(JSON.stringify(solve("ab","z"))); // Вывод 3: "ab"
