/* 📌 Задача 24. Прыжки до конца. Каждое число задаёт максимальную длину прыжка вправо. Проверь, можно ли дойти от первого элемента непустого массива до последнего. Уровень: Junior. */

function solve(a) {
  let reach = 0;
  for (let i = 0; i <= reach && i < a.length; i++) reach = Math.max(reach, i + a[i]);
  return reach >= a.length - 1;
}

console.log(JSON.stringify(solve([2,3,1,1,4]))); // Вывод 1: true
console.log(JSON.stringify(solve([3,2,1,0,4]))); // Вывод 2: false
console.log(JSON.stringify(solve([0]))); // Вывод 3: true
