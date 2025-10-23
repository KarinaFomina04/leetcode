/* 📌 Задача 26. Дождевая вода. Посчитай объём дождевой воды между столбцами неотрицательной высоты единичной ширины. Уровень: Middle. */

function solve(a) {
  let left = 0;
  let right = a.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let water = 0;
  while (left <= right) {
    if (a[left] <= a[right]) {
      maxLeft = Math.max(maxLeft, a[left]);
      water += maxLeft - a[left++];
    } else {
      maxRight = Math.max(maxRight, a[right]);
      water += maxRight - a[right--];
    }
  }
  return water;
}

console.log(JSON.stringify(solve([4,2,0,3,2,5]))); // Вывод 1: 9
console.log(JSON.stringify(solve([2,0,2]))); // Вывод 2: 2
console.log(JSON.stringify(solve([1,2,3]))); // Вывод 3: 0
