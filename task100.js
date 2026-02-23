/* 📌 Задача 100. Максимум произведения подмассива. Найди максимальное произведение непустого непрерывного подмассива непустого массива. Уровень: Middle. */

function solve(a) {
  let low = a[0];
  let high = a[0];
  let best = high;
  for (let n of a.slice(1)) {
    let candidates = [n, n * low, n * high];
    low = Math.min(...candidates);
    high = Math.max(...candidates);
    best = Math.max(best, high);
  }
  return best;
}

console.log(JSON.stringify(solve([2,3,-2,4]))); // Вывод 1: 6
console.log(JSON.stringify(solve([-2,0,-1]))); // Вывод 2: 0
console.log(JSON.stringify(solve([-2,3,-4]))); // Вывод 3: 24
