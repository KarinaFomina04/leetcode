/* 📌 Задача 87. Раскрытие повторов. Раскрой корректную строку с шаблонами вида 3[ab]. Повторы могут быть вложенными. Числа обозначают только количество повторов. Уровень: Middle. */

function solve(s) {
  let stack = [];
  let current = '';
  let count = 0;
  for (let char of s) {
    if (char >= '0' && char <= '9') count = count * 10 + Number(char);
    else if (char === '[') {
      stack.push([current, count]);
      current = '';
      count = 0;
    } else if (char === ']') {
      let [prefix, times] = stack.pop();
      current = prefix + current.repeat(times);
    } else current += char;
  }
  return current;
}

console.log(JSON.stringify(solve("3[a2[c]]"))); // Вывод 1: "accaccacc"
console.log(JSON.stringify(solve("2[ab]x"))); // Вывод 2: "ababx"
console.log(JSON.stringify(solve("abc"))); // Вывод 3: "abc"
