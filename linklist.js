function arrayToList(arr){
  var list = null;
  for (var i = (arr.length - 1); i >= 0; i -= 1){
    list = {value: arr[i],
          rest: list};
  }
  return list;
}

console.log(arrayToList([10, 20]));

function arrayToListRecursive(arr){
  var list = null;
  if (arr.length === 1){
    return list;
  }
  else if (arr.length > 1){
    list = {value: arr.pop(), rest: arrayToListRecursive(arr)};
  }
  else if (!list){
  return undefined;
}
}

console.log(arrayToListRecursive([10,20]));
