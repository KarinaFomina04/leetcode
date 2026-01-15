/* 📌 Задача 77. Пересечение списков интервалов. Даны два отсортированных списка попарно непересекающихся замкнутых интервалов. Верни все их общие части по порядку. Уровень: Middle. */

function solve(a, b) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    let start = Math.max(a[i][0], b[j][0]);
    let end = Math.min(a[i][1], b[j][1]);
    if (start <= end) result.push([start, end]);
    if (a[i][1] < b[j][1]) i++;
    else j++;
  }
  return result;
}

console.log(JSON.stringify(solve([[0,2],[5,10]],[[1,5],[8,12]]))); // Вывод 1: [[1,2],[5,5],[8,10]]
console.log(JSON.stringify(solve([],[[1,3]]))); // Вывод 2: []
console.log(JSON.stringify(solve([[1,2]],[[3,4]]))); // Вывод 3: []
