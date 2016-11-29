function myEvery(arr, predicate) {
  return arr.filter(predicate).length === arr.length;
}

function isBigEnough(elem) {
  return (elem >= 10);
}

console.log(myEvery([11,12,13,14], isBigEnough));
console.log(myEvery([11,12,13,14, 7, 11], isBigEnough));
