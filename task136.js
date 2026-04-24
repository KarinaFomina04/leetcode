/* 📌 Задача 136. Разбиение на слова. Проверь, можно ли разбить строку на слова из словаря. Слова можно использовать повторно. Уровень: Junior. */

function solve(s, a) {
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    if (dp[i]) for (let word of a) if (s.startsWith(word, i)) dp[i + word.length] = true;
  }
  return dp[s.length];
}

console.log(JSON.stringify(solve("leetcode",["leet","code"]))); // Вывод 1: true
console.log(JSON.stringify(solve("catsandog",["cats","dog","sand","and","cat"]))); // Вывод 2: false
console.log(JSON.stringify(solve("appleapple",["apple"]))); // Вывод 3: true
