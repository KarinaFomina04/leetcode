/* 📌 Задача 152. Палиндром с одним удалением. Проверь, можно ли сделать латинскую строку палиндромом, удалив не больше одной буквы. Уровень: Middle. */

function solve(s) {
  function palindrome(left, right) {
    while (left < right) if (s[left++] !== s[right--]) return false;
    return true;
  }
  let left = 0;
  let right = s.length - 1;
  while (left < right && s[left] === s[right]) {
    left++;
    right--;
  }
  return left >= right || palindrome(left + 1, right) || palindrome(left, right - 1);
}

console.log(JSON.stringify(solve("abca"))); // Вывод 1: true
console.log(JSON.stringify(solve("abc"))); // Вывод 2: false
console.log(JSON.stringify(solve(""))); // Вывод 3: true
