/* 📌 Задача 156. Суммы отрезков. Для каждой пары [l,r] верни сумму элементов от l до r включительно. Все индексы корректны. На каждый запрос трать постоянное время после подготовки. Уровень: Junior. */

function solve(a, queries) {
  let prefix = [0];
  for (let n of a) prefix.push(prefix.at(-1) + n);
  return queries.map(([l, r]) => prefix[r + 1] - prefix[l]);
}

console.log(JSON.stringify(solve([1,-2,3,4],[[0,2],[2,3]]))); // Вывод 1: [2,7]
console.log(JSON.stringify(solve([5],[[0,0]]))); // Вывод 2: [5]
console.log(JSON.stringify(solve([],[]))); // Вывод 3: []
