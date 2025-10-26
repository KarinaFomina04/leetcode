/* 📌 Задача 28. Первый неповторяющийся символ. Верни индекс первой латинской буквы с частотой один или -1. Уровень: Junior. */

function solve(s) {
  let counts = new Map();
  for (let char of s) counts.set(char, (counts.get(char) || 0) + 1);
  return [...s].findIndex(char => counts.get(char) === 1);
}

console.log(JSON.stringify(solve("leetcode"))); // Вывод 1: 0
console.log(JSON.stringify(solve("aabbc"))); // Вывод 2: 4
console.log(JSON.stringify(solve("aabb"))); // Вывод 3: -1
