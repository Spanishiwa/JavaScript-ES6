function findMaxRepeatCountInWord(word) {
  let letters = {};

  for (let i = 0; i < word.length; i += 1) {
    letters[word[i]] = letters[word[i]]+1 || 1;
  }

  let letter = Object.keys(letters).reduce(function(p, c) {
    return letters[p] > letters[c] ? p : c;
  });

  return letters[letter];
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  let words = text.split(' ');
  // Break up input text into words (space-delimited).
  // For each word...
  words.forEach(function(word) {
    if (findMaxRepeatCountInWord(word) > maxRepeatCountOverall) {
      maxRepeatCountOverall = findMaxRepeatCountInWord(word);
      wordWithMaxRepeatCount = word;
    }
  })
      //  If that max repeat count is higher than the overall max repeat count, then
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount

  return wordWithMaxRepeatCount;
}
console.log(findMaxRepeatCountInWord('evereey'));
console.log(findFirstWordWithMostRepeatedChars('the three most everey'));
