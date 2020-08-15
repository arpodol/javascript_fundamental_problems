function reverse(inputForReversal) {
  var i;
  var output = [];
  for (i = inputForReversal.length - 1; i >= 0; i -= 1) {
    output.push(inputForReversal[i])
  }

  if (!Array.isArray(inputForReversal)) {
    output = output.join('');
  }
  return output;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
