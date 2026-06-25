/* 📌 Задача 173. Пакет задач на дни. Разбей массив положительных весов на не больше d непрерывных групп, сохранив порядок. Найди наименьшую возможную максимальную сумму группы. Массив непустой, d ≥ 1. Уровень: Middle. */

function solve(a, d) {
  let left = 0;
  let right = 0;
  for (let n of a) {
    left = Math.max(left, n);
    right += n;
  }
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    let groups = 1;
    let sum = 0;
    for (let n of a) {
      if (sum + n > middle) {
        groups++;
        sum = 0;
      }
      sum += n;
    }
    if (groups <= d) right = middle;
    else left = middle + 1;
  }
  return left;
}

console.log(JSON.stringify(solve([7,2,5,10,8],2))); // Вывод 1: 18
console.log(JSON.stringify(solve([1,2,3],3))); // Вывод 2: 3
console.log(JSON.stringify(solve([4,5],1))); // Вывод 3: 9
