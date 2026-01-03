/* 📌 Задача 69. Группы анаграмм. Разбей латинские слова на группы анаграмм. Сохрани исходный порядок слов и порядок появления групп. Уровень: Junior. */

function solve(a) {
  let groups = new Map();
  for (let word of a) {
    let key = [...word].sort().join('');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return [...groups.values()];
}

console.log(JSON.stringify(solve(["eat","tea","tan","ate","nat","bat"]))); // Вывод 1: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(JSON.stringify(solve([""]))); // Вывод 2: [[""]]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
