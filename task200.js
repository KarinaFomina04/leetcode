/* ?? ?????? 200. Минимум в стеке. Обработай операции ["push",x], ["pop"] и ["min"]. Верни результаты pop и min за постоянное время на операцию. Для пустого стека возвращай null. ???????: Middle. */

function solve(a) {
  let stack = [];
  let result = [];
  for (let [operation, value] of a) {
    if (operation === 'push') stack.push([value, Math.min(value, stack.at(-1)?.[1] ?? Infinity)]);
    else if (operation === 'pop') result.push(stack.pop()?.[0] ?? null);
    else result.push(stack.at(-1)?.[1] ?? null);
  }
  return result;
}

console.log(JSON.stringify(solve([["push",3],["push",1],["min"],["pop"],["min"]]))); // ????? 1: [1,1,3]
console.log(JSON.stringify(solve([["min"],["pop"]]))); // ????? 2: [null,null]
console.log(JSON.stringify(solve([]))); // ????? 3: []
