// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  var elements = {};

  for (var i = 0; i < nums.length; i++) {
    if(!elements[nums[i]]) {
      elements[nums[i]] = 1;
    } else {
      return true;
    }
  }

  return false;

};

console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,9]));