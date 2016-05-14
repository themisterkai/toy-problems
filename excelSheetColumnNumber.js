// Excel Sheet Column Number

// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28

var titleToNumber = function(s) {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lettersObj = {};
  var index = 0;

  for(var i = 0; i < letters.length; i++) {
    lettersObj[letters[i]] = i+1;
  }

  var letterToNumberFinder = function(letter){
    if(letter === "") {
      return;
    }
    index += (lettersObj[letter[0]]) * Math.pow(26,letter.length-1);
    letterToNumberFinder(letter.substring(1));
  }

  letterToNumberFinder(s);

  return index;

};