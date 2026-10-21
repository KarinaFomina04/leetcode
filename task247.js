/* 🧩 Задача 247. Объединение интервалов. Даны замкнутые интервалы [start, end], где start ≤ end. Объедини пересекающиеся интервалы и верни результат по возрастанию начала. Уровень: Middle. */

function solve(intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [start, end] of sorted) {
    const last = merged.at(-1);
    if (last && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }
  return merged;
}

console.log(JSON.stringify(solve([[8,10],[1,3],[2,6],[15,18]]))); // Пример 1: [[1,6],[8,10],[15,18]]
console.log(JSON.stringify(solve([[1,4],[4,5]]))); // Пример 2: [[1,5]]
console.log(JSON.stringify(solve([]))); // Пример 3: []
