// 12. Integer to Roman

// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function(num) {
  var romanNumerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };

  return romanNumerals[num];


};

console.log(intToRoman(1));