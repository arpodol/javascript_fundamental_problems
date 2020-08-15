function invoiceTotal() {
  return Array.prototype.slice.call(arguments).reduce((acc, ele) => acc + ele)
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
