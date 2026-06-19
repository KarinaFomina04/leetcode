/* 📌 Задача 170. Наибольшее составное число. Расставь неотрицательные целые числа так, чтобы при склеивании получилось наибольшее число. Верни строку. Массив непустой, числа не больше 10⁹. Уровень: Junior. */

function solve(a) {
  let parts = a.map(String).sort((x, y) => (y + x).localeCompare(x + y));
  return parts[0] === '0' ? '0' : parts.join('');
}

console.log(JSON.stringify(solve([3,30,34,5,9]))); // Вывод 1: "9534330"
console.log(JSON.stringify(solve([10,2]))); // Вывод 2: "210"
console.log(JSON.stringify(solve([0,0]))); // Вывод 3: "0"
