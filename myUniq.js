'use strict';
Array.prototype.myUniq = function () {
  let results = [];
  for (let i = 0; i < this.length; i+=1){
    if (results.includes(this[i])){
      continue;
    }
    else {
      results.push(this[i]);
    }
  }
  return results;
};

console.log([1, 2, 1, 3, 3].myUniq());
