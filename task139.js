/* 📌 Задача 139. Расшифровка цифр. Посчитай способы разбить непустую строку цифр на коды от 1 до 26. Коды с ведущим нулём запрещены. Уровень: Middle. */

function solve(s) {
  let previous = 1;
  let current = s[0] === '0' ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    let next = s[i] === '0' ? 0 : current;
    let code = Number(s.slice(i - 1, i + 1));
    if (code >= 10 && code <= 26) next += previous;
    [previous, current] = [current, next];
  }
  return current;
}

console.log(JSON.stringify(solve("226"))); // Вывод 1: 3
console.log(JSON.stringify(solve("06"))); // Вывод 2: 0
console.log(JSON.stringify(solve("10"))); // Вывод 3: 1
