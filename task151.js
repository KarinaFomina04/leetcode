/* 📌 Задача 151. Подстроки-палиндромы. Посчитай все непустые палиндромные подстроки из латинских букв. Одинаковые строки на разных позициях считаются отдельно. Уровень: Middle. */

function solve(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let right of [i, i + 1]) {
      let left = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
      }
    }
  }
  return count;
}

console.log(JSON.stringify(solve("aaa"))); // Вывод 1: 6
console.log(JSON.stringify(solve("abc"))); // Вывод 2: 3
console.log(JSON.stringify(solve(""))); // Вывод 3: 0
