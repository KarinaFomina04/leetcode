/* 📌 Задача 165. Сортировка слиянием. Отсортируй числа по возрастанию методом слияния. Уровень: Middle. */

function solve(a) {
  if (a.length < 2) return a.slice();
  let middle = Math.floor(a.length / 2);
  let left = solve(a.slice(0, middle));
  let right = solve(a.slice(middle));
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  return result.concat(left.slice(i), right.slice(j));
}

console.log(JSON.stringify(solve([5,2,3,1]))); // Вывод 1: [1,2,3,5]
console.log(JSON.stringify(solve([0,0,-1]))); // Вывод 2: [-1,0,0]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
