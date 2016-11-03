function range(start, end, step){
  var arr = [];
  for (var i = start; i <= end; i+= step){
    arr.push(i);
  }
  return arr;
}

console.log(range(5, 10));

function sumOfRange(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i += 1){
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfRange(range(1, 10)));
console.log(sumOfRange([1,2,3,4,5,6,7,8,9,10]));
