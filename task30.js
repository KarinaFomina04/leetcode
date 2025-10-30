/* 📌 Задача 30. Общий префикс. Найди самый длинный общий префикс всех строк массива. Для пустого массива верни пустую строку. Уровень: Junior. */

function solve(a) {
  let prefix = a[0] || '';
  for (let word of a) while (!word.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
}

console.log(JSON.stringify(solve(["flower","flow","flight"]))); // Вывод 1: "fl"
console.log(JSON.stringify(solve(["dog","cat"]))); // Вывод 2: ""
console.log(JSON.stringify(solve([]))); // Вывод 3: ""
