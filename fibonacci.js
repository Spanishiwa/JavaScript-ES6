function fibonacci(n) {
  if (n === 2) {
    return [0,1];
  }
  else if (n === 1) {
    return [0];
  }
  else if (n < 1) {
    return [];
  }
  let fibArr = fibonacci(n-1);
  fibArr.push( fibArr[(fibArr.length-2)] + fibArr[(fibArr.length-1)] );
  return fibArr;
}

console.log(fibonacci(4));
