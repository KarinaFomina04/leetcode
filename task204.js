/* ?? ?????? 204. Журнал папок. Команда "../" поднимает на уровень выше, "./" оставляет на месте, любая другая команда открывает дочернюю папку. Найди глубину от корня после всех команд. ???????: Junior. */

function solve(a) {
  let depth = 0;
  for (let command of a) {
    if (command === '../') depth = Math.max(0, depth - 1);
    else if (command !== './') depth++;
  }
  return depth;
}

console.log(JSON.stringify(solve(["d1/","d2/","../","d21/","./"]))); // ????? 1: 2
console.log(JSON.stringify(solve(["../","../"]))); // ????? 2: 0
console.log(JSON.stringify(solve([]))); // ????? 3: 0
