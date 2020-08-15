var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(num) {
  var char = '';
  var absNum = Math.abs(num);
  do{
    char = DIGITS[absNum % 10] + char;

    absNum = Math.floor(absNum/10);
  } while (absNum > 0)
  if (num > 0){
    char = '+' + char;
  } else if (num < 0) {
    char = '-' + char;
  }
  return char;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
