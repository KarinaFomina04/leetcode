/* 📌 Задача 98. Следующий больший по кругу. Для каждой позиции найди первое большее число при обходе вправо по кругу или -1. Уровень: Middle. */

function solve(a) {
  let result = Array(a.length).fill(-1);
  let stack = [];
  for (let i = 2 * a.length - 1; i >= 0; i--) {
    let index = i % a.length;
    while (stack.length && stack.at(-1) <= a[index]) stack.pop();
    if (i < a.length && stack.length) result[index] = stack.at(-1);
    stack.push(a[index]);
  }
  return result;
}

console.log(JSON.stringify(solve([1,2,1]))); // Вывод 1: [2,-1,2]
console.log(JSON.stringify(solve([3,2,1]))); // Вывод 2: [-1,3,3]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
