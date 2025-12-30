/* 📌 Задача 67. Ближайшие дубли. Проверь, есть ли равные элементы на расстоянии не больше k позиций. k неотрицательное. Уровень: Junior. */

function solve(a, k) {
  let last = new Map();
  for (let i = 0; i < a.length; i++) {
    if (last.has(a[i]) && i - last.get(a[i]) <= k) return true;
    last.set(a[i], i);
  }
  return false;
}

console.log(JSON.stringify(solve([1,2,1],2))); // Вывод 1: true
console.log(JSON.stringify(solve([1,2,1],1))); // Вывод 2: false
console.log(JSON.stringify(solve([],0))); // Вывод 3: false
