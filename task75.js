/* 📌 Задача 75. Заправки по кругу. Даны непустые массивы запасов топлива и затрат до следующей станции. Найди старт с пустым баком, позволяющий проехать круг, или -1. Если стартов несколько, верни первый. Уровень: Middle. */

function solve(gas, cost) {
  let total = 0;
  let tank = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    let difference = gas[i] - cost[i];
    total += difference;
    tank += difference;
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return total < 0 ? -1 : start;
}

console.log(JSON.stringify(solve([1,2,3,4,5],[3,4,5,1,2]))); // Вывод 1: 3
console.log(JSON.stringify(solve([2,3,4],[3,4,3]))); // Вывод 2: -1
console.log(JSON.stringify(solve([3],[2]))); // Вывод 3: 0
