function isPrime(number){

  for (var i = (number-1); i >= 2; i-=1){
    if (number%2 === 0){
      return false;
    }
    else if (number%i === 0){
      return false;
    }
  }
  return true;
}

function firstNPrimes(number){
  var arr = [];
  var i = 2;
  while (arr.length < number){
    if (isPrime(i)){
      arr.push(i);
    }
    i += 1;
  }
  return arr;
}

function sumOfNPrimes(number){
  var result = 0;
  var arr = firstNPrimes(number);
  for (var i = 0; i < arr.length; i+=1){
    result += arr[i];
  }
  return result;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
