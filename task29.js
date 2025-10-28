/* 📌 Задача 29. Подстрока без повторов. Найди длину самой длинной подстроки без повторов. Строка состоит из латинских букв. Уровень: Middle. */

function solve(s) {
  let last = new Map();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    left = Math.max(left, (last.get(s[right]) ?? -1) + 1);
    last.set(s[right], right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(JSON.stringify(solve("abcabcbb"))); // Вывод 1: 3
console.log(JSON.stringify(solve("abba"))); // Вывод 2: 2
console.log(JSON.stringify(solve(""))); // Вывод 3: 0
