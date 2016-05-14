// 75. Sort Colors

// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

var sortColors = function(nums) {
  var indexOne = 0;

  nums.forEach(function(number, index){
    nums.splice(index, 1);
    if(number === 0) {
      nums.splice(0, 0, number);
      indexOne++
    } else if ( number === 1) {
      nums.splice(indexOne, 0, number);
      indexOne++;
    } else {
      nums.splice(index, 0, number);
    }
  });

  //return nums;
};

var nums = [0,1,2,2,2,1,1,1,1,0,0,0,2,2,2,1,1,2,0,2,1,0];
sortColors(nums);
console.log(nums);