// 275. H-Index II

// Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?

// Hint:

// Expected runtime complexity is in O(log n) and the input is sorted.

var hIndex = function(citations) {

  var totalH = 0;

  for (var i = 0; i < citations.length; i++ ) {
    var remaining = citations.length-i;
    if(citations[i] >= remaining) {
      totalH = remaining;
      return totalH;
    }
  }

  return totalH;

};