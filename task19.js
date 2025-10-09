/* 📌 Задача 19. Равновесный индекс. Верни первый индекс, на котором суммы слева и справа равны, или -1. Уровень: Middle. */

function solve(a) {
  let right = a.reduce((sum, n) => sum + n, 0);
  let left = 0;
  for (let i = 0; i < a.length; i++) {
    right -= a[i];
    if (left === right) return i;
    left += a[i];
  }
  return -1;
}

console.log(JSON.stringify(solve([1,7,3,6,5,6]))); // Вывод 1: 3
console.log(JSON.stringify(solve([2]))); // Вывод 2: 0
console.log(JSON.stringify(solve([1,2]))); // Вывод 3: -1
