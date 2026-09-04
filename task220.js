/* ?? ?????? 220. Финальный ранг. Для каждого результата из массива различных результатов верни место. Лучший получает место 1. Порядок ответа совпадает с входным. ???????: Junior. */

function solve(a) {
  let sorted = a.slice().sort((x, y) => y - x);
  let places = new Map(sorted.map((n, i) => [n, i + 1]));
  return a.map(n => places.get(n));
}

console.log(JSON.stringify(solve([10,3,8,9,4]))); // ????? 1: [1,5,3,2,4]
console.log(JSON.stringify(solve([9]))); // ????? 2: [1]
console.log(JSON.stringify(solve([]))); // ????? 3: []
