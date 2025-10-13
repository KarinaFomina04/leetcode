/* 📌 Задача 20. Круговой сдвиг. Сдвинь массив вправо на k позиций по кругу. k неотрицательное. Уровень: Junior. */

function solve(a, k) {
  if (!a.length) return [];
  let split = a.length - k % a.length;
  return a.slice(split).concat(a.slice(0, split));
}

console.log(JSON.stringify(solve([1,2,3,4],2))); // Вывод 1: [3,4,1,2]
console.log(JSON.stringify(solve([1,2],4))); // Вывод 2: [1,2]
console.log(JSON.stringify(solve([],1))); // Вывод 3: []
