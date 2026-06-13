/* 📌 Задача 166. Сортировка подсчётом. Отсортируй массив целых чисел от 0 до 100 методом подсчёта. Уровень: Junior. */

function solve(a) {
  let counts = Array(101).fill(0);
  for (let n of a) counts[n]++;
  let result = [];
  for (let n = 0; n < counts.length; n++) {
    for (let i = 0; i < counts[n]; i++) result.push(n);
  }
  return result;
}

console.log(JSON.stringify(solve([3,1,2,1]))); // Вывод 1: [1,1,2,3]
console.log(JSON.stringify(solve([100,0]))); // Вывод 2: [0,100]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
