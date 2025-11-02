/* 📌 Задача 33. Подпоследовательность. Проверь, можно ли получить строку a удалением символов из строки b. Уровень: Junior. */

function solve(a, b) {
  let i = 0;
  let chars = [...a];
  for (let char of b) if (char === chars[i]) i++;
  return i === chars.length;
}

console.log(JSON.stringify(solve("abc","ahbgdc"))); // Вывод 1: true
console.log(JSON.stringify(solve("axc","ahbgdc"))); // Вывод 2: false
console.log(JSON.stringify(solve("","a"))); // Вывод 3: true
