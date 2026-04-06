/* 📌 Задача 125. Курсы и зависимости. Даны n курсов и пары [курс, обязательный предшественник]. Проверь, можно ли пройти все курсы. Уровень: Middle. */

function solve(n, a) {
  let graph = Array.from({length: n}, () => []);
  let degree = Array(n).fill(0);
  for (let [course, before] of a) {
    graph[before].push(course);
    degree[course]++;
  }
  let queue = [];
  for (let i = 0; i < n; i++) if (!degree[i]) queue.push(i);
  for (let i = 0; i < queue.length; i++) {
    for (let next of graph[queue[i]]) if (--degree[next] === 0) queue.push(next);
  }
  return queue.length === n;
}

console.log(JSON.stringify(solve(2,[[1,0]]))); // Вывод 1: true
console.log(JSON.stringify(solve(2,[[1,0],[0,1]]))); // Вывод 2: false
console.log(JSON.stringify(solve(3,[]))); // Вывод 3: true
