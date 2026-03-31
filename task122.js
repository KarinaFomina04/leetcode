/* 📌 Задача 122. Квадрат из единиц. Найди максимальную площадь квадрата, заполненного единицами в двоичной матрице. Уровень: Middle. */

function solve(a) {
  let previous = Array((a[0]?.length ?? 0) + 1).fill(0);
  let best = 0;
  for (let values of a) {
    let row = [0];
    for (let j = 1; j <= values.length; j++) {
      row[j] = values[j - 1] ? 1 + Math.min(previous[j - 1], previous[j], row[j - 1]) : 0;
      best = Math.max(best, row[j]);
    }
    previous = row;
  }
  return best * best;
}

console.log(JSON.stringify(solve([[1,0,1],[1,1,1],[1,1,1]]))); // Вывод 1: 4
console.log(JSON.stringify(solve([[0]]))); // Вывод 2: 0
console.log(JSON.stringify(solve([[1,1]]))); // Вывод 3: 1
