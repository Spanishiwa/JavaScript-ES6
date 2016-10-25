function countChar(str, letter){
  var count = 0;
  for (var i = 0; (i < str.length); i+=1) {
    if (str.charAt(i) === letter || str.charAt(i) === letter.toUpperCase()) {
      count += 1;
    }
  }
  return count;
}

console.log(countChar("Beans", "e"));

function countBs(str){
  return countChar(str, "B");
}

console.log(countBs("Beans"));
