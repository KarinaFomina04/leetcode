/* 🧩 Задача 245. Группы анаграмм. Сгруппируй слова из строчных латинских букв, совпадающие после сортировки символов. Сохрани порядок слов в группе и выведи группы в порядке их первого появления. Уровень: Middle. */

function solve(words) {
  const groups = new Map();
  for (const word of words) {
    const key = [...word].sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return [...groups.values()];
}

console.log(JSON.stringify(solve(["eat","tea","tan","ate","nat","bat"]))); // Пример 1: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(JSON.stringify(solve(["",""]))); // Пример 2: [["",""]]
console.log(JSON.stringify(solve([]))); // Пример 3: []
