/* 📌 Задача 72. Тройка с нулевой суммой. Верни все уникальные отсортированные тройки чисел с нулевой суммой. Индексы в каждой тройке различны. Тройки идут лексикографически по числам. Уровень: Middle. */

function solve(a) {
  a = a.slice().sort((x, y) => x - y);
  let result = [];
  for (let i = 0; i < a.length - 2; i++) {
    if (i > 0 && a[i] === a[i - 1]) continue;
    let left = i + 1;
    let right = a.length - 1;
    while (left < right) {
      let sum = a[i] + a[left] + a[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([a[i], a[left], a[right]]);
        do { left++; } while (left < right && a[left] === a[left - 1]);
        right--;
      }
    }
  }
  return result;
}

console.log(JSON.stringify(solve([-1,0,1,2,-1,-4]))); // Вывод 1: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(solve([0,0,0,0]))); // Вывод 2: [[0,0,0]]
console.log(JSON.stringify(solve([1,2,3]))); // Вывод 3: []
