/* 📌 Задача 49. Ожидание тёплого дня. Для каждого дня найди число дней до первой более высокой температуры. Если такого дня нет, верни 0. Уровень: Middle. */

function solve(a) {
  let result = Array(a.length).fill(0);
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    while (stack.length && a[stack.at(-1)] < a[i]) {
      let previous = stack.pop();
      result[previous] = i - previous;
    }
    stack.push(i);
  }
  return result;
}

console.log(JSON.stringify(solve([73,74,71,76]))); // Вывод 1: [1,2,1,0]
console.log(JSON.stringify(solve([40,40,41]))); // Вывод 2: [2,1,0]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
