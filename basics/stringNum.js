var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(str) {
  var charArray = str.split('').reverse();
  var int = 0;
  var i;
  for (i = 0; i < charArray.length; i += 1) {
    int += DIGITS[charArray[i]] * 10 ** i;
  }
  return int;
}


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
