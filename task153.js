/* 📌 Задача 153. Подстрока из разных букв. Найди максимальную длину подстроки, содержащей не больше k различных латинских букв. k неотрицательное. Уровень: Middle. */

function solve(s, k) {
  let counts = new Map();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    counts.set(c, (counts.get(c) || 0) + 1);
    while (counts.size > k) {
      let first = s[left++];
      let count = counts.get(first) - 1;
      if (count) counts.set(first, count);
      else counts.delete(first);
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(JSON.stringify(solve("eceba",2))); // Вывод 1: 3
console.log(JSON.stringify(solve("aa",1))); // Вывод 2: 2
console.log(JSON.stringify(solve("abc",0))); // Вывод 3: 0
