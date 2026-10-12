/* ?? ?????? 242. Арифметические отрезки. Посчитай непрерывные подмассивы длины не меньше трёх, в которых разность соседних элементов постоянна. ???????: Middle. */

function solve(a) {
  let ending = 0;
  let total = 0;
  for (let i = 2; i < a.length; i++) {
    if (a[i] - a[i - 1] === a[i - 1] - a[i - 2]) ending++;
    else ending = 0;
    total += ending;
  }
  return total;
}

console.log(JSON.stringify(solve([1,2,3,4]))); // ????? 1: 3
console.log(JSON.stringify(solve([7,7,7]))); // ????? 2: 1
console.log(JSON.stringify(solve([1,3,8]))); // ????? 3: 0
