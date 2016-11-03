Array.prototype.myTranspose = function() {
  let transposed = [];
  for (let i = 0; i < this.length; i += 1){
    transposed[i] = [];
    for (let j = 0; j < this[i].length; j += 1){
      transposed[i][j] = this[j][i];
    }
  }
  return transposed;
};

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

console.log(arr.myTranspose());
