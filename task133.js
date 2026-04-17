/* 📌 Задача 133. Поиск слова на поле. Проверь, можно ли составить слово из соседних по сторонам клеток прямоугольного поля. Клетку нельзя использовать дважды. Уровень: Middle. */

function solve(a, s) {
  let used = a.map(row => row.map(() => false));
  function visit(i, j, k) {
    if (k === s.length) return true;
    if (a[i]?.[j] !== s[k] || used[i][j]) return false;
    used[i][j] = true;
    let found = visit(i - 1, j, k + 1) || visit(i + 1, j, k + 1) || visit(i, j - 1, k + 1) || visit(i, j + 1, k + 1);
    used[i][j] = false;
    return found;
  }
  if (!s) return true;
  return a.some((row, i) => row.some((_, j) => visit(i, j, 0)));
}

console.log(JSON.stringify(solve([["A","B"],["C","D"]],"ABD"))); // Вывод 1: true
console.log(JSON.stringify(solve([["A","B"]],"ABA"))); // Вывод 2: false
console.log(JSON.stringify(solve([],""))); // Вывод 3: true
