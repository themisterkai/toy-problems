// Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) {
  var stack = [];
  var pairs = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  };

  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if(pairs[char]) {
      stack.push(char)
    } else if (char === '}' || char === ']' || char === ')') {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;

};


console.log(isValid(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(isValid(' var hubble = function() { telescopes.awesome();')); // false
console.log(isValid(']'));
console.log(isValid('()[]{}'));

