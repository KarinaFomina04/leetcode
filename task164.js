/* 📌 Задача 164. Сортировка вставками. Отсортируй массив чисел по возрастанию методом вставок на месте. Уровень: Middle. */

function solve(a) {
  for (let i = 1; i < a.length; i++) {
    let n = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > n) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = n;
  }
  return a;
}

console.log(JSON.stringify(solve([4,1,3,2]))); // Вывод 1: [1,2,3,4]
console.log(JSON.stringify(solve([1,-1,1]))); // Вывод 2: [-1,1,1]
console.log(JSON.stringify(solve([]))); // Вывод 3: []
