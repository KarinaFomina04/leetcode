/* 📌 Задача 80. Переворот нулей. Найди максимальную длину серии единиц, если можно заменить не больше k нулей. Вход двоичный, k неотрицательное. Уровень: Middle. */

function solve(a, k) {
  let left = 0;
  let zeros = 0;
  let best = 0;
  for (let right = 0; right < a.length; right++) {
    if (!a[right]) zeros++;
    while (zeros > k) {
      if (!a[left++]) zeros--;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(JSON.stringify(solve([1,0,1,0,1],1))); // Вывод 1: 3
console.log(JSON.stringify(solve([0,0],2))); // Вывод 2: 2
console.log(JSON.stringify(solve([0],0))); // Вывод 3: 0
