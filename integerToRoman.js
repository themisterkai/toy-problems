// 12. Integer to Roman

// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function(num) {
  var romanNumerals = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
  ]

  var roman = "";

  while (num !== 0) {
    if(num < romanNumerals[romanNumerals.length-1][0]) {
      romanNumerals.pop()
    } else {
      roman += romanNumerals[romanNumerals.length-1][1];
      num -= romanNumerals[romanNumerals.length-1][0];
    }
  }

  return roman;

};

console.log(intToRoman(2014));