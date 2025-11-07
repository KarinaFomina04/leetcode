/* 📌 Задача 36. Сжатие строки. Замени каждую серию одинаковых латинских букв на букву и число повторов. Для одиночной буквы число пропусти. Уровень: Middle. */

function solve(s) {
  let result = '';
  for (let i = 0; i < s.length;) {
    let end = i + 1;
    while (s[end] === s[i]) end++;
    result += s[i] + (end - i > 1 ? end - i : '');
    i = end;
  }
  return result;
}

console.log(JSON.stringify(solve("aaabbc"))); // Вывод 1: "a3b2c"
console.log(JSON.stringify(solve("x"))); // Вывод 2: "x"
console.log(JSON.stringify(solve(""))); // Вывод 3: ""
