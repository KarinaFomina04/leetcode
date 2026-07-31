/* ?? ?????? 199. Очередь из двух стеков. Обработай операции ["push",x], ["pop"] и ["peek"] очереди из двух стеков. Верни результаты pop и peek, для пустой очереди возвращай null. ???????: Middle. */

function solve(a) {
  let incoming = [];
  let outgoing = [];
  let result = [];
  for (let [operation, value] of a) {
    if (operation === 'push') {
      incoming.push(value);
    } else {
      if (!outgoing.length) while (incoming.length) outgoing.push(incoming.pop());
      result.push((operation === 'pop' ? outgoing.pop() : outgoing.at(-1)) ?? null);
    }
  }
  return result;
}

console.log(JSON.stringify(solve([["push",1],["push",2],["peek"],["pop"],["pop"],["pop"]]))); // ????? 1: [1,1,2,null]
console.log(JSON.stringify(solve([["peek"]]))); // ????? 2: [null]
console.log(JSON.stringify(solve([]))); // ????? 3: []
