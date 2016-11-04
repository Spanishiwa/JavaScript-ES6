//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function letterChanges(str) {
  let result = str.split('');

  for(let i = 0; i < result.length; i += 1) {
    let baseN = 'a'.charCodeAt(0);
    if (/[a-z]/i.test(result[i])) {
      if (/[A-Z]/.test(result[i])) baseN = 'A'.charCodeAt(0);

      let difference = (result[i].charCodeAt(0) - baseN);
      let shifted = (difference + 1)%26+baseN;
      let newL = String.fromCharCode(shifted);

      if ( /[aeiou]/.test(newL) ) newL = newL.toUpperCase();

      result[i] = newL;
    }
  }
  return result.join('');
}
console.log(letterChanges("hello*3"));
console.log(letterChanges("fun times!"));
console.log(letterChanges("FUN tiMES!"));
