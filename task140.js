/* 📌 Задача 140. Дома по кругу. Найди максимальную сумму из домов, расположенных по кругу. Нельзя выбирать соседние дома. Суммы неотрицательные. Уровень: Middle. */

function solve(a) {
  if (a.length < 2) return a[0] ?? 0;
  function best(start, end) {
    let previous = 0;
    let current = 0;
    for (let i = start; i < end; i++) [previous, current] = [current, Math.max(current, previous + a[i])];
    return current;
  }
  return Math.max(best(0, a.length - 1), best(1, a.length));
}

console.log(JSON.stringify(solve([2,3,2]))); // Вывод 1: 3
console.log(JSON.stringify(solve([1,2,3,1]))); // Вывод 2: 4
console.log(JSON.stringify(solve([7]))); // Вывод 3: 7
