/* ?? ?????? 231. Рюкзак. У каждого предмета есть положительный целый вес и неотрицательная ценность. Найди максимальную ценность при вместимости k. Каждый предмет можно взять один раз. ???????: Junior. */

function solve(a, k) {
  let dp = Array(k + 1).fill(0);
  for (let [weight, value] of a) {
    for (let i = k; i >= weight; i--) dp[i] = Math.max(dp[i], dp[i - weight] + value);
  }
  return dp[k];
}

console.log(JSON.stringify(solve([[2,3],[3,4],[4,5]],5))); // ????? 1: 7
console.log(JSON.stringify(solve([[2,7]],1))); // ????? 2: 0
console.log(JSON.stringify(solve([[1,3],[1,4]],2))); // ????? 3: 7
