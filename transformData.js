var testArray = [
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
    [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
]

function getDataPerPerson(tripleArr) {
  let dataPerPerson = [];
  tripleArr.forEach(function(nestedArr) {
    let singlePerson = nestedArr.concat.apply([], nestedArr);
    dataPerPerson.push(singlePerson);
  })
  return dataPerPerson;
}

function getProps(tripleArr) {
  let personData = getDataPerPerson(tripleArr)[0];
  let props = [];
  for(let i = 0; i < personData.length; i += 1) {
    if (i%2 === 0) props.push(personData[i]);
  }
  return props;
}

function getVals(tripleArr) {
  let personData = getDataPerPerson(tripleArr);
  let props = getProps(tripleArr);
  let person = [];
  let vals = [];
  for(let i = 0; i < personData.length; i += 1) {
    for(let j = 0; j < personData[i].length; j += 1) {
      if (!(props.includes(personData[i][j])))
        person.push(personData[i][j]);
        if (j === personData[i].length - 1) {
          vals.push(person);
          person = [];
        }
    }
  }
  return vals;
}

function arrOfObjs(tripleArr) {
  let props = getProps(tripleArr);
  let arrOfObjs = [];
  let obj = {};
  while (arrOfObjs.length < tripleArr.length) {
    for(let i = 0; i < props.length; i +=1) {
      obj[props[i]] = undefined;
      if (i === props.length - 1) {
        arrOfObjs.push(obj);
        obj = {};
      }
    }
  }
  return arrOfObjs;
}

function setValues(tripleArr) {
  let objs = arrOfObjs(tripleArr);
  let vals = getVals(tripleArr);
  let props = getProps(tripleArr);
  for(let i = 0; i < objs.length; i += 1) {
    let obj = objs[i];
    for(let j = 0; j < vals[i].length; j += 1) {
      let val = vals[i][j];
      let prop = props[j];
      obj[prop] = val;
    }
  }
  return objs;
}

function transformEmployeeData(tripleArr) {
  return setValues(tripleArr);
}

// console.log(testArray);
// console.log(getDataPerPerson(testArray));
// console.log(getProps(getDataPerPerson(testArray)[0]));
// console.log(getProps(getDataPerPerson(testArray)));
// console.log(getVals(testArray));
// console.log(arrOfObjs(testArray));
// console.log(setValues(testArray));
console.log(transformEmployeeData(testArray));
