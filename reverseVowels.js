// 345. Reverse Vowels of a String

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

var reverseVowels = function(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var myVowels = [];
  var newWord = '';

  s.split('').forEach(function(letter){
    if(vowels.indexOf(letter) > -1){
      myVowels.push(letter);
    }
  })
  //return myVowels;

  s.split('').forEach(function(letter){

    if(vowels.indexOf(letter) > -1){
      newWord += myVowels.pop();
    } else {
      newWord += letter
    }
  })
  return newWord;
};

console.log(reverseVowels("leetcode"));