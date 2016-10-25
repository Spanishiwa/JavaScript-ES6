Array.prototype.twoSum = function () {
  let results = [];
  for (let i = 0; i < this.length; i += 1){
    for (let j = (i+1); j < this.length; j += 1){
      if (this[i] + this[j] === 0){
        results.push([i,j]);
      }
    }
  }
  return results;
};


console.log([-1, 0, 2, -2, 1].twoSum());
