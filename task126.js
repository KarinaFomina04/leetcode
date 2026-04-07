/* 📌 Задача 126. Двудольный граф. Проверь, можно ли раскрасить вершины неориентированного графа в два цвета так, чтобы соседи имели разные цвета. Уровень: Middle. */

function solve(a) {
  let colors = Array(a.length).fill(0);
  for (let i = 0; i < a.length; i++) {
    if (colors[i]) continue;
    colors[i] = 1;
    let stack = [i];
    while (stack.length) {
      let vertex = stack.pop();
      for (let next of a[vertex]) {
        if (colors[next] === colors[vertex]) return false;
        if (!colors[next]) {
          colors[next] = -colors[vertex];
          stack.push(next);
        }
      }
    }
  }
  return true;
}

console.log(JSON.stringify(solve([[1,3],[0,2],[1,3],[0,2]]))); // Вывод 1: true
console.log(JSON.stringify(solve([[1,2],[0,2],[0,1]]))); // Вывод 2: false
console.log(JSON.stringify(solve([[]]))); // Вывод 3: true
