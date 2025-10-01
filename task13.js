/* 📌 Задача 13. Плюс один. Прибавь единицу к числу, заданному непустым массивом цифр без ведущих нулей. Уровень: Middle. */

function solve(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] < 9) {
      a[i]++;
      return a;
    }
    a[i] = 0;
  }
  return [1, ...a];
}

console.log(JSON.stringify(solve([1,2,9]))); // Вывод 1: [1,3,0]
console.log(JSON.stringify(solve([9,9]))); // Вывод 2: [1,0,0]
console.log(JSON.stringify(solve([0]))); // Вывод 3: [1]
