/* 📌 Задача 23. Массив-гора. Проверь, что массив строго возрастает до вершины и строго убывает после неё. По обе стороны нужен хотя бы один элемент. Уровень: Junior. */

function solve(a) {
  let i = 1;
  while (i < a.length && a[i] > a[i - 1]) i++;
  if (i === 1 || i === a.length) return false;
  while (i < a.length && a[i] < a[i - 1]) i++;
  return i === a.length;
}

console.log(JSON.stringify(solve([0,3,2,1]))); // Вывод 1: true
console.log(JSON.stringify(solve([1,2,2,1]))); // Вывод 2: false
console.log(JSON.stringify(solve([1,2]))); // Вывод 3: false
