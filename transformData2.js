
function dataToObj(nestedArr) {
  let obj = {};
  for(let i = 0; i < nestedArr.length; i += 1) {
    prop = nestedArr[i][0];
    val = nestedArr[i][1];
    obj[prop] = val;
  }
  return obj;
}

function transform(tripleArr) {
  return tripleArr.map(dataToObj);
}
// console.log(dataToObj(testArray2));
console.log(transform(testArray));
