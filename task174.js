/* 📌 Задача 174. Минимальная скорость. Даны непустые кучки положительных размеров и h часов. За час можно съесть до k единиц из одной кучки. Найди наименьшее целое k, если h не меньше числа кучек. Уровень: Middle. */

function solve(a, h) {
  let left = 1;
  let right = a.reduce((max, n) => Math.max(max, n), 1);
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    let hours = a.reduce((sum, n) => sum + Math.ceil(n / middle), 0);
    if (hours <= h) right = middle;
    else left = middle + 1;
  }
  return left;
}

console.log(JSON.stringify(solve([3,6,7,11],8))); // Вывод 1: 4
console.log(JSON.stringify(solve([30,11,23,4,20],5))); // Вывод 2: 30
console.log(JSON.stringify(solve([8],4))); // Вывод 3: 2
