// Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {

  var length = nums.length;
  var i = 0;

  while (length) {
    if (nums[i] === 0) {
      nums.splice(i,1);
      nums.push(0);
    } else {
      i++;
    }
    length--;
  }

};

nums = [1,0,0,1,1,0,1]
//var nums = [0, 0, 0, 1, 0, 3, 12, 0, 50, 100, 70, 80];
moveZeroes(nums)
console.log(nums);