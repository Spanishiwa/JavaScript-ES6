var nums = [1,3,5,7,9];
function reverseArr(arr){
  var arr2 = [];
  for (var i = 0; i < nums.length; i += 1){
    arr2.unshift(nums[i]);
  }
  return arr2;
}

console.log(nums);
console.log(reverseArr(nums));
console.log(nums);

function reverzeArr(arr){
  for (var i = 0; i < (Math.ceil((arr.length - 1)/2)); i+=1){
    var temp = arr[i];
    arr[i] = arr[(arr.length - 1 - i)];
    arr[(arr.length - 1 - i)] = temp;
  }
  return arr;
}

console.log(reverzeArr([1,2,3,4,5]));
console.log(reverzeArr([1,2,3,4]));
