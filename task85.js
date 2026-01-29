/* 📌 Задача 85. Уравновешивание скобок. Найди минимальное число вставок, чтобы строка из круглых скобок стала правильной. Уровень: Middle. */

function solve(s) {
  let open = 0;
  let missing = 0;
  for (let char of s) {
    if (char === '(') open++;
    else if (open) open--;
    else missing++;
  }
  return missing + open;
}

console.log(JSON.stringify(solve("()))(("))); // Вывод 1: 4
console.log(JSON.stringify(solve(")("))); // Вывод 2: 2
console.log(JSON.stringify(solve("()"))); // Вывод 3: 0
