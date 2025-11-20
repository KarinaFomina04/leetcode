/* 📌 Задача 43. Решето Эратосфена. Посчитай простые числа строго меньше неотрицательного целого n. Уровень: Junior. */

function solve(n) {
  let composite = Array(n).fill(false);
  for (let i = 2; i * i < n; i++) {
    if (!composite[i]) {
      for (let j = i * i; j < n; j += i) composite[j] = true;
    }
  }
  return composite.slice(2).filter(value => !value).length;
}

console.log(JSON.stringify(solve(10))); // Вывод 1: 4
console.log(JSON.stringify(solve(2))); // Вывод 2: 0
console.log(JSON.stringify(solve(20))); // Вывод 3: 8
