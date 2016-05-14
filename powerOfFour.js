// Power of Four

// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// Follow up: Could you solve it without loops/recursion?

var isPowerOfFour = function(num) {
    if(num <= 0) return false;
    if(num === 1) return true;

    while (num > 4) {
        num = num / 4
    }
    return !(num % 4);
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(434354354543));
console.log(isPowerOfFour(68719476736));
