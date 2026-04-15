/* 📌 Задача 131. Генерация скобок. Верни все правильные строки из n пар круглых скобок в лексикографическом порядке. Уровень: Middle. */

function solve(n) {
  let result = [];
  function visit(open, close, s) {
    if (close === n) {
      result.push(s);
      return;
    }
    if (open < n) visit(open + 1, close, s + '(');
    if (close < open) visit(open, close + 1, s + ')');
  }
  visit(0, 0, '');
  return result;
}

console.log(JSON.stringify(solve(3))); // Вывод 1: ["((()))","(()())","(())()","()(())","()()()"]
console.log(JSON.stringify(solve(1))); // Вывод 2: ["()"]
console.log(JSON.stringify(solve(0))); // Вывод 3: [""]
