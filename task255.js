/* 🧩 Задача 255. Правильные скобки. Строка состоит из круглых, квадратных и фигурных скобок. Проверь, закрывается ли каждая открывающая скобка скобкой своего типа в правильном порядке. Уровень: Junior. */

function solve(s) {
  const closing = new Map([["(", ")"], ["[", "]"], ["{", "}"]]);
  const stack = [];
  for (const char of s) {
    if (closing.has(char)) stack.push(closing.get(char));
    else if (stack.pop() !== char) return false;
  }
  return stack.length === 0;
}

console.log(JSON.stringify(solve("([]{})"))); // Пример 1: true
console.log(JSON.stringify(solve("([)]"))); // Пример 2: false
console.log(JSON.stringify(solve("("))); // Пример 3: false
