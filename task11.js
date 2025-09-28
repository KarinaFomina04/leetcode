/* 📌 Задача 11. Слияние массивов. Объедини два отсортированных по возрастанию массива без повторной сортировки. Уровень: Junior. */

function solve(a, b) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  return result.concat(a.slice(i), b.slice(j));
}

console.log(JSON.stringify(solve([1,4],[2,3]))); // Вывод 1: [1,2,3,4]
console.log(JSON.stringify(solve([],[2]))); // Вывод 2: [2]
console.log(JSON.stringify(solve([1],[1]))); // Вывод 3: [1,1]
