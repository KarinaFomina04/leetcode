/* 📌 Задача 48. Минимум после сдвига. Найди минимум непустого массива различных чисел, отсортированного по возрастанию и сдвинутого по кругу. Уровень: Middle. */

function solve(a) {
  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (a[middle] > a[right]) left = middle + 1;
    else right = middle;
  }
  return a[left];
}

console.log(JSON.stringify(solve([4,5,1,2,3]))); // Вывод 1: 1
console.log(JSON.stringify(solve([1,2,3]))); // Вывод 2: 1
console.log(JSON.stringify(solve([7]))); // Вывод 3: 7
