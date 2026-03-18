/* 📌 Задача 115. Гниющие апельсины. Нули обозначают пустые клетки, 1 — свежие апельсины, 2 — гнилые. За минуту гниение передаётся соседям по стороне. Верни время или -1. Уровень: Middle. */

function solve(a) {
  let queue = [];
  let fresh = 0;
  let minutes = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 1) fresh++;
      if (a[i][j] === 2) queue.push([i, j, 0]);
    }
  }
  for (let index = 0; index < queue.length; index++) {
    let [x, y, time] = queue[index];
    minutes = time;
    for (let [i, j] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]) {
      if (a[i]?.[j] === 1) {
        a[i][j] = 2;
        fresh--;
        queue.push([i, j, time + 1]);
      }
    }
  }
  return fresh ? -1 : minutes;
}

console.log(JSON.stringify(solve([[2,1,1],[1,1,0],[0,1,1]]))); // Вывод 1: 4
console.log(JSON.stringify(solve([[2,0,1]]))); // Вывод 2: -1
console.log(JSON.stringify(solve([[0,2]]))); // Вывод 3: 0
