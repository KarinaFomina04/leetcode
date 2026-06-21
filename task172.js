/* 📌 Задача 172. Сумма с выбором знаков. Посчитай способы поставить плюс или минус перед каждым числом массива, чтобы сумма стала равной k. У нуля два возможных знака. Уровень: Middle. */

function solve(a, k) {
  let counts = new Map([[0, 1]]);
  for (let n of a) {
    let next = new Map();
    for (let [sum, count] of counts) {
      for (let value of [sum + n, sum - n]) next.set(value, (next.get(value) || 0) + count);
    }
    counts = next;
  }
  return counts.get(k) || 0;
}

console.log(JSON.stringify(solve([1,1,1,1,1],3))); // Вывод 1: 5
console.log(JSON.stringify(solve([0,0],0))); // Вывод 2: 4
console.log(JSON.stringify(solve([2],1))); // Вывод 3: 0
