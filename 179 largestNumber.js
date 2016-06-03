// 179. Largest Number
//
// Given a list of non negative integers, arrange them such that they form the largest number.

// For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

// Note: The result may be very large, so you need to return a string instead of an integer.




var num = [41,23,87,55,50,53,18,9,39,63,35,33,54,25,26,49,74,61,32,81,97,99,38,96,22,95,35,57,80,80,16,22,17,13,89,11,75,98,57,81,69,8,10,85,13,49,66,94,80,25,13,85,55,12,87,50,28,96,80,43,10,24,88,52,16,92,61,28,26,78,28,28,16,1,56,31,47,85,27,30,85,2,30,51,84,50,3,14,97,9,91,90,63,90,92,89,76,76,67,55];

var largestNumber = function(nums) {
    nums.sort(function(x,y){
    return ''+x+y < ''+y+x ? 1 : -1;
  });

  result = nums.join('');
  return parseInt(result) === 0 ? '0' : result;
};

console.log(largestNumber(num));



//console.log(comparison(128,12))



