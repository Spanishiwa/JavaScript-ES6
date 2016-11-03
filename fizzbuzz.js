function fizzBuzz(arr){
  var result = [];
  for (var i = 0; i < arr.length; i+=1){
    if (arr[i]%3 === 0 && arr[i]%5 === 0){
      continue;
    }
    else if (arr[i]%3 === 0){
      result.push(arr[i]);
    }
    else if (arr[i]%5 === 0){
      result.push(arr[i]);
    }
  }
  return result;
}


console.log(fizzBuzz([1,4,7,11,15,18,25, 30]));
