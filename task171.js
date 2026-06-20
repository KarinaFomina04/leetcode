/* 📌 Задача 171. Ближайшие точки. Верни первые k точек в порядке возрастания расстояния до начала координат. При равенстве сохрани порядок входа. 0 ≤ k ≤ длине массива. Уровень: Junior. */

function solve(a, k) {
  function squared([x, y]) {
    return x * x + y * y;
  }
  return a.slice().sort((x, y) => squared(x) - squared(y)).slice(0, k);
}

console.log(JSON.stringify(solve([[1,3],[-2,2]],1))); // Вывод 1: [[-2,2]]
console.log(JSON.stringify(solve([[1,0],[0,1],[0,0]],2))); // Вывод 2: [[0,0],[1,0]]
console.log(JSON.stringify(solve([],0))); // Вывод 3: []
