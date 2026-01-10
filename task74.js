/* 📌 Задача 74. Минимальные прыжки. Каждый элемент непустого массива задаёт максимальную длину прыжка вправо. Найди минимум прыжков до конца или -1. Уровень: Middle. */

function solve(a) {
  let jumps = 0;
  let end = 0;
  let reach = 0;
  for (let i = 0; i < a.length - 1; i++) {
    reach = Math.max(reach, i + a[i]);
    if (i === end) {
      if (reach === end) return -1;
      jumps++;
      end = reach;
    }
  }
  return jumps;
}

console.log(JSON.stringify(solve([2,3,1,1,4]))); // Вывод 1: 2
console.log(JSON.stringify(solve([1,0,1]))); // Вывод 2: -1
console.log(JSON.stringify(solve([0]))); // Вывод 3: 0
