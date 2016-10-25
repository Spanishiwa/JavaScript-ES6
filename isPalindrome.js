function isPalindrome(str) {
  function reverse(){
    return (str === str.split('').reverse().join(''));
  }
  return reverse();
}

console.log(isPalindrome("RACECAR"));
