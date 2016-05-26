var robHouse = function (array) {

  var max = 0;

  var moveThief = function (position, current) {
    current = current || 0;

    //base case
    if(position > array.length) {
      if (current > max) {
        max = current;
      }
      return;
    }

    current += array[position];
    moveThief(position+2, current);
    moveThief(position+3, current);

  }

  moveThief(0);
  moveThief(1);

  return max;


}

console.log(robHouse([30,20,30,50,30])); //80

console.log(robHouse([50,20,30,50,30]));

console.log(robHouse([123,12345,1,2,543,41])); //12888
