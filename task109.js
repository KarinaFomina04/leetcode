/* 📌 Задача 109. Поиск в монотонной матрице. Найди число k в матрице, где каждая строка и каждый столбец отсортированы по возрастанию. Уровень: Middle. */

function solve(a, k) {
  let i = 0;
  let j = (a[0]?.length ?? 0) - 1;
  while (i < a.length && j >= 0) {
    if (a[i][j] === k) return true;
    if (a[i][j] > k) j--;
    else i++;
  }
  return false;
}

console.log(JSON.stringify(solve([[1,4,7],[2,5,9],[3,6,10]],6))); // Вывод 1: true
console.log(JSON.stringify(solve([[1,2]],3))); // Вывод 2: false
console.log(JSON.stringify(solve([],0))); // Вывод 3: false
