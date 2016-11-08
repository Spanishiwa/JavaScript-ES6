function isArray(input) {
  return Array.isArray(input);
}

let test1 = [1,2,'a'];
let test2 = "string";

console.log(isArray(test1));
console.log(isArray(test2));
