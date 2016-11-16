var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

function extend(ob1, ob2) {
  let ob3 = Object.assign({}, ob2, ob1);
  return Object.assign(ob1, ob3);
}

console.log(extend(obj1, obj2));
console.log(obj1);
console.log(obj2);
