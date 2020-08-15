var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(str) {
  var charArray = str.split('').reverse();
  var int = 0;
  var i;
  for (i = 0; i < charArray.length - 1; i += 1) {
    int += DIGITS[charArray[i]] * 10 ** i;
  }
  if (charArray[charArray.length -1] == '-') {
    int *= -1;
  }
  return int;
}




console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
