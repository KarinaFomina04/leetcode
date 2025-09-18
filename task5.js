/* 📌 Задача 5. Индексы пары. Дан массив целых чисел и сумма k. Верни индексы пары с суммой k или пустой массив. Перебирай правые индексы по порядку. Уровень: Junior. */

function solve(a, k) {
  let seen = new Map();
  for (let i = 0; i < a.length; i++) {
    if (seen.has(k - a[i])) return [seen.get(k - a[i]), i];
    if (!seen.has(a[i])) seen.set(a[i], i);
  }
  return [];
}

console.log(JSON.stringify(solve([2,7,11],9))); // Вывод 1: [0,1]
console.log(JSON.stringify(solve([3,3],6))); // Вывод 2: [0,1]
console.log(JSON.stringify(solve([1],2))); // Вывод 3: []
