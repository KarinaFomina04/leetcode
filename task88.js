/* 📌 Задача 88. Упрощение пути. Упрости абсолютный путь Unix. Пропускай пустые части и точки, две точки означают переход вверх. Выше корня подниматься нельзя. Уровень: Junior. */

function solve(s) {
  let stack = [];
  for (let part of s.split('/')) {
    if (!part || part === '.') continue;
    if (part === '..') stack.pop();
    else stack.push(part);
  }
  return '/' + stack.join('/');
}

console.log(JSON.stringify(solve("/a/./b/../../c/"))); // Вывод 1: "/c"
console.log(JSON.stringify(solve("/../"))); // Вывод 2: "/"
console.log(JSON.stringify(solve("/a//b"))); // Вывод 3: "/a/b"
