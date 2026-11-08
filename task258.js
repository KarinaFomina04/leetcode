/* 🧩 Задача 258. Генерация скобок. Для неотрицательного целого n верни все правильные строки из n пар круглых скобок в лексикографическом порядке. Уровень: Middle. */

function solve(n) {
  const answer = [];
  function build(text, opened, closed) {
    if (closed === n) {
      answer.push(text);
      return;
    }
    if (opened < n) build(text + "(", opened + 1, closed);
    if (closed < opened) build(text + ")", opened, closed + 1);
  }
  build("", 0, 0);
  return answer;
}

console.log(JSON.stringify(solve(3))); // Пример 1: ["((()))","(()())","(())()","()(())","()()()"]
console.log(JSON.stringify(solve(1))); // Пример 2: ["()"]
console.log(JSON.stringify(solve(0))); // Пример 3: [""]
