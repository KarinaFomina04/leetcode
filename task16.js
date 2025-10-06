/* 📌 Задача 16. Произведение остальных элементов. Для каждой позиции найди произведение остальных элементов. Деление использовать нельзя. Уровень: Middle. */

function solve(a) {
  let result = [];
  let product = 1;
  for (let n of a) {
    result.push(product);
    product *= n;
  }
  product = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= a[i];
  }
  return result;
}

console.log(JSON.stringify(solve([1,2,3,4]))); // Вывод 1: [24,12,8,6]
console.log(JSON.stringify(solve([0,2,3]))); // Вывод 2: [6,0,0]
console.log(JSON.stringify(solve([5]))); // Вывод 3: [1]
