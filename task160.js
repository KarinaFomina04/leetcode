/* 📌 Задача 160. Подмассивы с суммой, кратной k. Посчитай непустые непрерывные подмассивы, сумма которых делится на положительное целое k. Уровень: Middle. */

function solve(a, k) {
  let counts = new Map([[0, 1]]);
  let remainder = 0;
  let result = 0;
  for (let n of a) {
    remainder = ((remainder + n) % k + k) % k;
    let count = counts.get(remainder) || 0;
    result += count;
    counts.set(remainder, count + 1);
  }
  return result;
}

console.log(JSON.stringify(solve([4,5,0,-2,-3,1],5))); // Вывод 1: 7
console.log(JSON.stringify(solve([-1,1],2))); // Вывод 2: 1
console.log(JSON.stringify(solve([],3))); // Вывод 3: 0
