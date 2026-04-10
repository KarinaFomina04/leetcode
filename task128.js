/* 📌 Задача 128. Подмножества. Верни все подмножества массива различных чисел. Начни с пустого и для каждого числа добавляй копии накопленных подмножеств с этим числом в конце. Уровень: Junior. */

function solve(a) {
  let result = [[]];
  for (let n of a) {
    let size = result.length;
    for (let i = 0; i < size; i++) result.push([...result[i], n]);
  }
  return result;
}

console.log(JSON.stringify(solve([1,2]))); // Вывод 1: [[],[1],[2],[1,2]]
console.log(JSON.stringify(solve([]))); // Вывод 2: [[]]
console.log(JSON.stringify(solve([5]))); // Вывод 3: [[],[5]]
