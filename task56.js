/* 📌 Задача 56. Целая часть корня. Найди целую часть квадратного корня из безопасного неотрицательного целого числа без Math.sqrt. Уровень: Middle. */

function solve(n) {
  let left = 0;
  let right = n;
  while (left < right) {
    let middle = left + Math.ceil((right - left) / 2);
    if (middle <= Math.floor(n / middle)) left = middle;
    else right = middle - 1;
  }
  return left;
}

console.log(JSON.stringify(solve(8))); // Вывод 1: 2
console.log(JSON.stringify(solve(0))); // Вывод 2: 0
console.log(JSON.stringify(solve(81))); // Вывод 3: 9
