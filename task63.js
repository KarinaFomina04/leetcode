/* 📌 Задача 63. Название столбца. Преобразуй положительный номер столбца таблицы в обозначение A, B, …, Z, AA и далее. Уровень: Junior. */

function solve(n) {
  let result = '';
  while (n > 0) {
    n--;
    result = String.fromCharCode(65 + n % 26) + result;
    n = Math.floor(n / 26);
  }
  return result;
}

console.log(JSON.stringify(solve(1))); // Вывод 1: "A"
console.log(JSON.stringify(solve(26))); // Вывод 2: "Z"
console.log(JSON.stringify(solve(701))); // Вывод 3: "ZY"
