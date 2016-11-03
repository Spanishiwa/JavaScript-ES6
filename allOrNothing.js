function allOrNothing(mod, ...numbers) {
  for (let i = 0; i < numbers.length; i+=1){
    if (numbers[i]%mod !== 0){
      return false;
    }
  }
  return true;
}

console.log(allOrNothing(3, 9, 12, 6));
console.log(allOrNothing(5,1,2,10));
