/* 📌 Задача 34. Повторяющаяся подстрока. Проверь, состоит ли непустая латинская строка из двух или более повторов одной подстроки. Уровень: Junior. */

function solve(s) {
  return (s + s).slice(1, -1).includes(s);
}

console.log(JSON.stringify(solve("abab"))); // Вывод 1: true
console.log(JSON.stringify(solve("aba"))); // Вывод 2: false
console.log(JSON.stringify(solve("a"))); // Вывод 3: false
