// 136. Single Number
//
// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function(nums) {
    // var int = 0;
    // nums.forEach(function(num) {
    //     int ^= num;
    // });
    // return int;

    return nums.reduce(function(answer, number) {
        answer ^= number;
        return answer;
    },0)
};

console.log(singleNumber([1,2,3,4,5,6,7,8,9,9,1,2,3,4,5,7,8]));