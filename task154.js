/* 📌 Задача 154. Строка из букв другой строки. Проверь, можно ли составить строку a из букв b. Каждую позицию b можно использовать один раз. Уровень: Junior. */

function solve(a, b) {
  let counts = new Map();
  for (let c of b) counts.set(c, (counts.get(c) || 0) + 1);
  for (let c of a) {
    if (!counts.get(c)) return false;
    counts.set(c, counts.get(c) - 1);
  }
  return true;
}

console.log(JSON.stringify(solve("aa","aab"))); // Вывод 1: true
console.log(JSON.stringify(solve("aa","ab"))); // Вывод 2: false
console.log(JSON.stringify(solve("",""))); // Вывод 3: true
