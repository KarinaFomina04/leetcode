/* 📌 Задача 148. Пропущенное положительное число. Найди наименьшее отсутствующее положительное число за линейное время и с постоянной дополнительной памятью. Массив целых чисел можно менять. Уровень: Middle. */

function solve(a) {
  for (let i = 0; i < a.length; i++) {
    while (a[i] > 0 && a[i] <= a.length && a[a[i] - 1] !== a[i]) {
      let j = a[i] - 1;
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
  let i = a.findIndex((n, index) => n !== index + 1);
  return i === -1 ? a.length + 1 : i + 1;
}

console.log(JSON.stringify(solve([3,4,-1,1]))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,2,0]))); // Вывод 2: 3
console.log(JSON.stringify(solve([1,1]))); // Вывод 3: 2
