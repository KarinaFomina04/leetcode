/* 📌 Задача 97. Следующий больший справа. Для каждой позиции верни первый больший элемент справа или -1. Уровень: Middle. */

function solve(a) {
  let result = Array(a.length).fill(-1);
  let stack = [];
  for (let i = a.length - 1; i >= 0; i--) {
    while (stack.length && stack.at(-1) <= a[i]) stack.pop();
    if (stack.length) result[i] = stack.at(-1);
    stack.push(a[i]);
  }
  return result;
}

console.log(JSON.stringify(solve([4,5,2,10]))); // Вывод 1: [5,10,10,-1]
console.log(JSON.stringify(solve([2,2]))); // Вывод 2: [-1,-1]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
