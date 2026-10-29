/* 🧩 Задача 252. Дни до потепления. Для каждой дневной температуры верни число дней до ближайшего более тёплого дня. Если такого дня нет, запиши 0. Уровень: Middle. */

function solve(temperatures) {
  const answer = Array(temperatures.length).fill(0);
  const pending = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (pending.length && temperatures[pending.at(-1)] < temperatures[i]) {
      const day = pending.pop();
      answer[day] = i - day;
    }
    pending.push(i);
  }
  return answer;
}

console.log(JSON.stringify(solve([73,74,75,71,69,72,76,73]))); // Пример 1: [1,1,4,2,1,1,0,0]
console.log(JSON.stringify(solve([30,30,31]))); // Пример 2: [2,1,0]
console.log(JSON.stringify(solve([40,30]))); // Пример 3: [0,0]
