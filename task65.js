/* 📌 Задача 65. Последний камень. Каждый раз сталкивай два самых тяжёлых камня. При разных весах возвращай камень с весом разности. Верни оставшийся вес или 0. Уровень: Junior. */

function solve(a) {
  let stones = a.slice();
  while (stones.length > 1) {
    stones.sort((x, y) => x - y);
    let difference = stones.pop() - stones.pop();
    if (difference) stones.push(difference);
  }
  return stones[0] ?? 0;
}

console.log(JSON.stringify(solve([2,7,4,1,8,1]))); // Вывод 1: 1
console.log(JSON.stringify(solve([2,2]))); // Вывод 2: 0
console.log(JSON.stringify(solve([9]))); // Вывод 3: 9
