/* 📌 Задача 130. Сочетания. Верни все сочетания из k различных чисел от 1 до n в лексикографическом порядке. 0 ≤ k ≤ n. Уровень: Middle. */

function solve(n, k) {
  let result = [];
  function visit(start, path) {
    if (path.length === k) {
      result.push(path);
      return;
    }
    for (let i = start; i <= n - k + path.length + 1; i++) visit(i + 1, [...path, i]);
  }
  visit(1, []);
  return result;
}

console.log(JSON.stringify(solve(4,2))); // Вывод 1: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(JSON.stringify(solve(3,3))); // Вывод 2: [[1,2,3]]
console.log(JSON.stringify(solve(2,0))); // Вывод 3: [[]]
