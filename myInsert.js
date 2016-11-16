Array.prototype.insert = function(index, value) {
  this.splice(index, 0, value);
  return this;

};

Object.defineProperty(Array.prototype, 'insert', {
  enumerable: false
});
