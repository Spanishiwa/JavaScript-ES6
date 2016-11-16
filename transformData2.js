var testArray = [
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
    [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']],
    [['firstName', 'Jackson'], ['lastName', 'Henry'], ['age', 17], ['role', 'assistant']]
]
var testArray2 = [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']]
function dataToObj(nestedArr) {
  let obj = {};
  for(let i = 0; i < nestedArr.length; i += 1) {
    prop = nestedArr[i][0];
    val = nestedArr[i][1];
    obj[prop] = val;
  }
  return obj;
}

function transformEmployeeData(tripleArr) {
  return tripleArr.map(dataToObj);
}
// console.log(dataToObj(testArray2));
console.log(transformEmployeeData(testArray));
