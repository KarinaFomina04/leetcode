/* 📌 Задача 162. Подмассивы с произведением меньше k. Посчитай непрерывные непустые подмассивы с произведением меньше k. Элементы положительные целые, промежуточные произведения помещаются в безопасное целое число. Уровень: Middle. */

function solve(a, k) {
  if (k <= 1) return 0;
  let left = 0;
  let product = 1;
  let count = 0;
  for (let right = 0; right < a.length; right++) {
    product *= a[right];
    while (product >= k) product /= a[left++];
    count += right - left + 1;
  }
  return count;
}

console.log(JSON.stringify(solve([10,5,2,6],100))); // Вывод 1: 8
console.log(JSON.stringify(solve([1,1],2))); // Вывод 2: 3
console.log(JSON.stringify(solve([1,2],1))); // Вывод 3: 0
