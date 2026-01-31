/* 📌 Задача 86. Сравнение после Backspace. Символ # стирает предыдущий символ, если он есть. Проверь, станут ли две строки одинаковыми. Уровень: Middle. */

function solve(a, b) {
  function type(s) {
    let stack = [];
    for (let char of s) {
      if (char === '#') stack.pop();
      else stack.push(char);
    }
    return stack.join('');
  }
  return type(a) === type(b);
}

console.log(JSON.stringify(solve("ab#c","ad#c"))); // Вывод 1: true
console.log(JSON.stringify(solve("a#c","b"))); // Вывод 2: false
console.log(JSON.stringify(solve("###",""))); // Вывод 3: true
