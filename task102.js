/* 📌 Задача 102. Минимальная разница пар. Найди все пары различных элементов с минимальной абсолютной разницей. Входные числа различны. Пары и их элементы идут по возрастанию. Уровень: Middle. */

function solve(a) {
  a = a.slice().sort((x, y) => x - y);
  let best = Infinity;
  let result = [];
  for (let i = 1; i < a.length; i++) {
    let diff = a[i] - a[i - 1];
    if (diff < best) {
      best = diff;
      result = [];
    }
    if (diff === best) result.push([a[i - 1], a[i]]);
  }
  return result;
}

console.log(JSON.stringify(solve([4,2,1,3]))); // Вывод 1: [[1,2],[2,3],[3,4]]
console.log(JSON.stringify(solve([1,3,8]))); // Вывод 2: [[1,3]]
console.log(JSON.stringify(solve([1]))); // Вывод 3: []
