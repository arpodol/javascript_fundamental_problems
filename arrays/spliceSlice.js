function slice(arr, start, end) {
  var subArray = [];
  var i;
  end = end > arr.length ? arr.length : end;
  for (i = start; i < end; i += 1) {
    subArray.push(arr[i]);
  }
  return subArray;
}


//console.log(slice([1, 2, 3], 1, 2));               // [2]
//console.log(slice([1, 2, 3], 2, 0));               // []
//console.log(slice([1, 2, 3], 5, 1));               // []
//console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
//
//var arr = [1, 2, 3];
//console.log(slice(arr, 1, 3));                     // [2, 3]
//console.log(arr);                                  // [1, 2, 3]

function splice(array, start, deleteCount) {
  var deleteArr = [];
  var i;
  var newEle = arguments.length - 3;
  var endInd = start + deleteCount;
  var finalLength = array.length - deleteCount + newEle;
  for (i = start; i < array.length; i += 1){
    if (i < endInd) {
      deleteArr.push(array[i]);
    }
    array[i] = array[i + deleteCount];
  }

  for (i = array.length + newEle; i > start; i -= 1 ) {
    array[i] = array[i - newEle];
  }

  for (i = start; i < start + newEle; i += 1) {
    array[i] = arguments[i - start + 3 ];
  }
  array.length = finalLength;
  return deleteArr;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]
