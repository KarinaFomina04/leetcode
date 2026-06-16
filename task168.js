/* 📌 Задача 168. Чётные перед нечётными. Переставь целые числа так, чтобы чётные шли перед нечётными. Внутри обеих групп сохрани порядок. Уровень: Junior. */

function solve(a) {
  let even = [];
  let odd = [];
  for (let n of a) {
    if (n % 2 === 0) even.push(n);
    else odd.push(n);
  }
  return even.concat(odd);
}

console.log(JSON.stringify(solve([3,2,1,4]))); // Вывод 1: [2,4,3,1]
console.log(JSON.stringify(solve([-1,0,-2]))); // Вывод 2: [0,-2,-1]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
