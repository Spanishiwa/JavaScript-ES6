Array.prototype.myTranspose = function() {
  for (let i = 0; i < this.length; i += 1){
    for (let j = 0; j < i; j += 1){
      var temp = this[i][j];
      this[i][j] = this[j][i];
      this[j][i] = temp;
    }
  }
  return this;
};

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

console.log(arr.myTranspose());
