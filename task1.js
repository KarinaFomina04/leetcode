//Running Sum of 1d Array
//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.
//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]




function runningSum(nums) {
  return nums.reduce((acc, curr, index) => {
    if (index === 0) {
      return [curr];
    } else {
      acc.push(curr + acc[index-1]);
      return acc;
    }
  }, []);
}
cost n = [1,2,3,4]
console.log(runningSum(n))
