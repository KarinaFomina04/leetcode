/* 📌 Задача 37. Удаление соседних дублей. Удаляй одинаковые соседние буквы парами и верни итоговую строку. Уровень: Junior. */

function solve(s) {
  let stack = [];
  for (let char of s) {
    if (stack.at(-1) === char) stack.pop();
    else stack.push(char);
  }
  return stack.join('');
}

console.log(JSON.stringify(solve("abbaca"))); // Вывод 1: "ca"
console.log(JSON.stringify(solve("azxxzy"))); // Вывод 2: "ay"
console.log(JSON.stringify(solve("aaa"))); // Вывод 3: "a"
