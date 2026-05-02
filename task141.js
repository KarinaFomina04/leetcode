/* 📌 Задача 141. Цена подъёма. Можно начать на ступеньке 0 или 1 и подниматься на одну или две ступени. Найди минимальную цену выхода за последний индекс. Плата берётся за каждую посещённую ступеньку. Длина массива не меньше двух. Уровень: Junior. */

function solve(a) {
  let previous = 0;
  let current = 0;
  for (let i = 2; i <= a.length; i++) {
    [previous, current] = [current, Math.min(current + a[i - 1], previous + a[i - 2])];
  }
  return current;
}

console.log(JSON.stringify(solve([10,15,20]))); // Вывод 1: 15
console.log(JSON.stringify(solve([1,100,1,1,1,100,1,1,100,1]))); // Вывод 2: 6
console.log(JSON.stringify(solve([5,2]))); // Вывод 3: 2
