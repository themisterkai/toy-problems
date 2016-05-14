// 13. Roman to Integer
// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(s) {
  var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var previous = 0;

  return s.split("").reduce(function(acc, val){
    if (romanNumerals[val] > previous && previous !== 0) {
      acc += romanNumerals[val] - previous * 2; // acc - previous + romanNumerals[val] - previous
      previous = romanNumerals[val];
    } else {
      acc += romanNumerals[val];
      previous = romanNumerals[val];
    }
    return acc;
  }, 0)

};

console.log(romanToInt("MMMCDXLIV"))