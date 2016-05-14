// 268. Missing Number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

var missingNumber = function(nums) {

  nums.sort(function(x,y){return (x-y)});

  for (var i = 0; i < nums.length; i++) {
    if(nums[i] !== i) {
      return i;
    }
  }
  return nums[nums.length-1]+1;
};

console.log(missingNumber([0, 1, 3]));