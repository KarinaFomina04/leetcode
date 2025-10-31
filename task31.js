/* 📌 Задача 31. Правильные скобки. Проверь вложенность круглых, квадратных и фигурных скобок. Других символов нет. Уровень: Middle. */

function solve(s) {
  let stack = [];
  let pairs = {')': '(', ']': '[', '}': '{'};
  for (let char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
}

console.log(JSON.stringify(solve("([]{})"))); // Вывод 1: true
console.log(JSON.stringify(solve("([)]"))); // Вывод 2: false
console.log(JSON.stringify(solve("("))); // Вывод 3: false
