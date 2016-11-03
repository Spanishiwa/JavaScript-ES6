function isEven(n){
  if (n === 0){
    return true;
  }
  else if (n === 1){
    return false;
  }
  else if (n < 0){
    return (isEven(Math.abs(n)));
  }
  else {
    return (isEven(n-2));
  }
}

console.log(isEven(3));
console.log(isEven(6));
