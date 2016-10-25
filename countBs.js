function countBs(str) {
  var count = 0;
  for(var i=0; str.length > i;i+=1){
    if (str.charAt(i) === "B"){
      count += 1;
    }
  }
  return count;
}

console.log(countBs("BBC"));
