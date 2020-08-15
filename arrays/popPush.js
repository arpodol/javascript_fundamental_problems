function pop(arr) {
  var last = arr[arr.length - 1];
  arr.splice(arr.length - 1, 1);
  return last;
}

function push(arr) {
  var numArgs = arguments.length;
  var i;
  for (i = 1; i < numArgs; i += 1) {
    arr.push(arguments[i]);
  }
  return arr.length;
}


// pop
var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
