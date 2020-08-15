function unshift(arr) {
  var i;
  var args = arguments.length;
  for (i = arr.length + arguments.length - 2; i >= 0; i -= 1) {
    arr[i] = arr[i - arguments.length + 1];
  }

  for (i = 0; i < arguments.length - 1; i += 1) {
    arr[i] = arguments[i + 1];
  }
  //arr[0] = value;
  return arr.length;
}

function shift (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  var returnVal = arr[0];
  var i;
  for (i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return returnVal;
}



console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
