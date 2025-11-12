/* 📌 Задача 38. Длиннейший палиндром. Найди самую длинную палиндромную подстроку латинской строки. При равенстве верни первую. Уровень: Middle. */

function solve(s) {
  let best = '';
  for (let i = 0; i < s.length; i++) {
    for (let right of [i, i + 1]) {
      let left = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        if (right - left + 1 > best.length) best = s.slice(left, right + 1);
        left--;
        right++;
      }
    }
  }
  return best;
}

console.log(JSON.stringify(solve("babad"))); // Вывод 1: "bab"
console.log(JSON.stringify(solve("cbbd"))); // Вывод 2: "bb"
console.log(JSON.stringify(solve(""))); // Вывод 3: ""
