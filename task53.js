/* 📌 Задача 53. Расстояние Левенштейна. Найди минимальное число вставок, удалений и замен букв для преобразования латинской строки a в b. Уровень: Middle. */

function solve(a, b) {
  let previous = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let row = [i];
    for (let j = 1; j <= b.length; j++) {
      row[j] = a[i - 1] === b[j - 1] ? previous[j - 1] : 1 + Math.min(previous[j - 1], row[j - 1], previous[j]);
    }
    previous = row;
  }
  return previous[b.length];
}

console.log(JSON.stringify(solve("horse","ros"))); // Вывод 1: 3
console.log(JSON.stringify(solve("","abc"))); // Вывод 2: 3
console.log(JSON.stringify(solve("a","a"))); // Вывод 3: 0
