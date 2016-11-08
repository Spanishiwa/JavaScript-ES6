function subStrings(str) {
  let resultArr = [];
  for(let i = 0; i < str.length; i += 1) {
    for(let j = (i+1); j < str.length+1; j += 1) {
      let substr = str.slice(i, j);
      resultArr.push(substr);
    }
  }

  return resultArr;
}

console.log(subStrings("dog"));
