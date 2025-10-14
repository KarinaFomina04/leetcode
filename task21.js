/* 📌 Задача 21. Квадраты по порядку. Верни квадраты чисел отсортированного массива в порядке возрастания за один проход. Уровень: Middle. */

function solve(a) {
  let result = Array(a.length);
  let left = 0;
  let right = a.length - 1;
  for (let i = right; i >= 0; i--) {
    let n = Math.abs(a[left]) > Math.abs(a[right]) ? a[left++] : a[right--];
    result[i] = n * n;
  }
  return result;
}

console.log(JSON.stringify(solve([-4,-1,0,3,10]))); // Вывод 1: [0,1,9,16,100]
console.log(JSON.stringify(solve([-2,-1]))); // Вывод 2: [1,4]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
