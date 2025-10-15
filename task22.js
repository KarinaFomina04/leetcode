/* 📌 Задача 22. Элемент большинства. Найди число, занимающее больше половины позиций. Если его нет, верни null. Уровень: Junior. */

function solve(a) {
  let candidate = null;
  let balance = 0;
  for (let n of a) {
    if (!balance) candidate = n;
    balance += n === candidate ? 1 : -1;
  }
  return a.filter(n => n === candidate).length > a.length / 2 ? candidate : null;
}

console.log(JSON.stringify(solve([2,2,1,2]))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,2]))); // Вывод 2: null
console.log(JSON.stringify(solve([]))); // Вывод 3: null
