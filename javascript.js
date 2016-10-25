function min(a, b){
  if (a < b){
    return a;
  }
  else{
    return b;
  }
}

console.log(min(5,0));

function test(expectedResult, actualResult, expectedText){
  if(expectedResult === actualResult){
    console.log("passed!");
  }
  else{
    console.log(expectedText);
  }
}

test(min(0,5), 5, `your answer was ${actualResult} but it should be min should be 0`);
