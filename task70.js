/* 📌 Задача 70. Распределение печенья. Даны аппетиты детей и размеры печений. Одному ребёнку можно дать одно печенье размера не меньше его аппетита. Найди максимум довольных детей. Уровень: Junior. */

function solve(a, b) {
  let children = a.slice().sort((x, y) => x - y);
  let cookies = b.slice().sort((x, y) => x - y);
  let i = 0;
  for (let size of cookies) if (size >= children[i]) i++;
  return i;
}

console.log(JSON.stringify(solve([1,2,3],[1,1]))); // Вывод 1: 1
console.log(JSON.stringify(solve([1,2],[1,2,3]))); // Вывод 2: 2
console.log(JSON.stringify(solve([],[1]))); // Вывод 3: 0
