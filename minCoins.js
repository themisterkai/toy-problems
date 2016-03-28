var minCoin = function (amount, coins) {
  //var coins = [1,2,3,6,23,5,7,434343];

  var min = 0;
  var current = 0;

  for (var i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      if (amount/coins[i] >= 1) {
        current = Math.floor(amount/coins[i]);
        var remaining = amount - (current * coins[i]);
      }

      if (remaining > 0) {
        current = current + minCoin(remaining, coins);
      }

      if (min === 0) {
        min = current;
      }

      if (current < min && current !== 0) {
        min = current
      }
      current = 0;
    }

  }

  return min;

}

var coins = [1,2,3,5];

console.log(minCoin(20, coins));

