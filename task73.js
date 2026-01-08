/* 📌 Задача 73. Цвета по порядку. Отсортируй массив из 0, 1 и 2 на месте за один проход. Уровень: Middle. */

function solve(a) {
  let left = 0;
  let i = 0;
  let right = a.length - 1;
  while (i <= right) {
    if (a[i] === 0) {
      [a[left], a[i]] = [a[i], a[left]];
      left++;
      i++;
    } else if (a[i] === 2) {
      [a[right], a[i]] = [a[i], a[right]];
      right--;
    } else i++;
  }
  return a;
}

console.log(JSON.stringify(solve([2,0,2,1,1,0]))); // Вывод 1: [0,0,1,1,2,2]
console.log(JSON.stringify(solve([2,1,0]))); // Вывод 2: [0,1,2]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
