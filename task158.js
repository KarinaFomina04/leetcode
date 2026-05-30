/* 📌 Задача 158. Левая и правая суммы. Для каждой позиции верни модуль разности сумм элементов слева и справа. Уровень: Middle. */

function solve(a) {
  let right = a.reduce((sum, n) => sum + n, 0);
  let left = 0;
  return a.map(n => {
    right -= n;
    let result = Math.abs(left - right);
    left += n;
    return result;
  });
}

console.log(JSON.stringify(solve([10,4,8,3]))); // Вывод 1: [15,1,11,22]
console.log(JSON.stringify(solve([1]))); // Вывод 2: [0]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
