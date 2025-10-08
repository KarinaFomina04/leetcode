/* 📌 Задача 18. Подмассивы с заданной суммой. Посчитай непустые непрерывные подмассивы с суммой k. Уровень: Middle. */

function solve(a, k) {
  let counts = new Map([[0, 1]]);
  let sum = 0;
  let result = 0;
  for (let n of a) {
    sum += n;
    result += counts.get(sum - k) || 0;
    counts.set(sum, (counts.get(sum) || 0) + 1);
  }
  return result;
}

console.log(JSON.stringify(solve([1,1,1],2))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,-1,0],0))); // Вывод 2: 3
console.log(JSON.stringify(solve([],0))); // Вывод 3: 0
