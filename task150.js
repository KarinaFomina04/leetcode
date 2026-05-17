/* 📌 Задача 150. Расстояние до буквы. В строке из латинских букв для каждой позиции найди расстояние до ближайшего вхождения c. Буква c встречается хотя бы раз. Уровень: Middle. */

function solve(s, c) {
  let result = [];
  let nearest = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) nearest = i;
    result[i] = i - nearest;
  }
  nearest = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) nearest = i;
    result[i] = Math.min(result[i], nearest - i);
  }
  return result;
}

console.log(JSON.stringify(solve("abaa","b"))); // Вывод 1: [1,0,1,2]
console.log(JSON.stringify(solve("aaa","a"))); // Вывод 2: [0,0,0]
console.log(JSON.stringify(solve("abc","c"))); // Вывод 3: [2,1,0]
