/* 📌 Задача 35. Изоморфные строки. Проверь, можно ли взаимно однозначно заменить латинские символы строки a, чтобы получить b. Уровень: Middle. */

function solve(a, b) {
  if (a.length !== b.length) return false;
  let map = new Map();
  let used = new Set();
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      if (map.get(a[i]) !== b[i]) return false;
    } else {
      if (used.has(b[i])) return false;
      map.set(a[i], b[i]);
      used.add(b[i]);
    }
  }
  return true;
}

console.log(JSON.stringify(solve("egg","add"))); // Вывод 1: true
console.log(JSON.stringify(solve("foo","bar"))); // Вывод 2: false
console.log(JSON.stringify(solve("ab","cc"))); // Вывод 3: false
