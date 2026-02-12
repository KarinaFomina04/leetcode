/* 📌 Задача 94. Количество пар. Посчитай пары индексов i < j, на которых стоят одинаковые числа. Уровень: Middle. */

function solve(a) {
  let counts = new Map();
  let result = 0;
  for (let n of a) {
    let count = counts.get(n) || 0;
    result += count;
    counts.set(n, count + 1);
  }
  return result;
}

console.log(JSON.stringify(solve([1,2,3,1,1,3]))); // Вывод 1: 4
console.log(JSON.stringify(solve([1,1,1,1]))); // Вывод 2: 6
console.log(JSON.stringify(solve([]))); // Вывод 3: 0
