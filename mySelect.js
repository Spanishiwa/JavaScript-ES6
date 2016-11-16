function select(arr, obj) {
  // your code here
  var result = {};

  for(var key in obj) {
    for (var i = 0; i < arr.length; i++) {
      if(key !== arr[i]) {
        continue;
      } else {
        result[key] = obj[key];
      }

    }
  }
  return result;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);
