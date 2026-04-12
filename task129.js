/* 📌 Задача 129. Перестановки. Верни все перестановки различных чисел по возрастанию лексикографического порядка. Уровень: Middle. */

function solve(a) {
  a = a.slice().sort((x, y) => x - y);
  let result = [];
  let used = new Set();
  function visit(path) {
    if (path.length === a.length) {
      result.push(path.slice());
      return;
    }
    for (let n of a) {
      if (used.has(n)) continue;
      used.add(n);
      path.push(n);
      visit(path);
      path.pop();
      used.delete(n);
    }
  }
  visit([]);
  return result;
}

console.log(JSON.stringify(solve([2,1]))); // Вывод 1: [[1,2],[2,1]]
console.log(JSON.stringify(solve([3]))); // Вывод 2: [[3]]
console.log(JSON.stringify(solve([]))); // Вывод 3: [[]]
