/* 📌 Задача 163. Максимумы скользящих окон. Для каждого окна длины k найди максимум за линейное время. 1 ≤ k ≤ длине массива. Уровень: Middle. */

function solve(a, k) {
  let queue = [];
  let head = 0;
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (queue[head] <= i - k) head++;
    while (queue.length > head && a[queue.at(-1)] <= a[i]) queue.pop();
    queue.push(i);
    if (i >= k - 1) result.push(a[queue[head]]);
  }
  return result;
}

console.log(JSON.stringify(solve([1,3,-1,-3,5,3,6,7],3))); // Вывод 1: [3,3,5,5,6,7]
console.log(JSON.stringify(solve([2,2],2))); // Вывод 2: [2]
console.log(JSON.stringify(solve([-1],1))); // Вывод 3: [-1]
