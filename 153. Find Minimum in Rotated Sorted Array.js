// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// We've to return let minimum number in array

// Brute Force
// Time Complexity : O(n)
// Space Complexity : O(1)

var findMin = (nums) => Math.min(...nums);

// Binary Search
// Time Complexity : O(n)
// Space Complexity : O(1)

var findMin = (nums) => {
  let l = 0,
    r = nums.length - 1,
    m;
  while (l < r) {
    m = ~~((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
};
