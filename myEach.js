Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i+=1){
    callback(this[i]);
  }
  return this;
};

// [1,2,3,4,5].myEach((num) => {
//   console.log(`square of ${num} is ${num * num}`);
// });

Array.prototype.myMap = function(func) {
  let resultArr = [];
  this.myEach(k => resultArr.push(func(k)));
  return resultArr;
};
let b = [1,2,3,4,5];
let c = b.myMap(k => (k * 2));
console.log(`new mapped array is ${c}`);
console.log(`input array is ${b}`);
