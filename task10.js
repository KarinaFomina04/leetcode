/* 📌 Задача 10. Нули в конце. Перемести нули в конец массива, сохранив порядок остальных элементов. Уровень: Junior. */

function solve(a) {
  let i = 0;
  for (let n of a) if (n !== 0) a[i++] = n;
  while (i < a.length) a[i++] = 0;
  return a;
}

console.log(JSON.stringify(solve([0,1,0,3]))); // Вывод 1: [1,3,0,0]
console.log(JSON.stringify(solve([0]))); // Вывод 2: [0]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
