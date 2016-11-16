function countAllCharacters(str) {
  let freqObj = {};
  if (!str) return freqObj;
  for(let i = 0; i < str.length; i += 1) {
    let letter = str[i];
    if (!freqObj[letter]) freqObj[letter] = 1;
    else freqObj[letter] += 1;
  }
  return freqObj;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
