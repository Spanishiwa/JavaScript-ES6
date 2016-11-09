

function largerN(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// function largest(...arr) {
//   // let args = Array.prototype.slice.call(arguments);
//   if (args.length === 1)
//     args = [].concat.apply([], args);
//   let result = args[0];
//
//   for(let i = 0; i < args.length-1; i += 1) {
//     let j = (i+1);
//     let testN = largerN(args[i], args[j]);
//     if (testN > result) result = testN;
//   }
//   return result;
// }

function largest(...nums) {
  if (nums[0][0] !== undefined)
    var [first, ...rest] = nums[0];
    console.log(`first is ${first} rest is ${rest} nums is ${nums}`);
  if (nums.length === 1)
    nums = [].concat.apply([], nums);
  let result = nums[0];

  for(let i = 0; i < nums.length-1; i += 1) {
    let j = (i+1);
    let testN = largerN(nums[i], nums[j]);
    if (testN > result) result = testN;
  }
  return result;
}

console.log(largerN(5,10));
console.log(largest([1,2,9,4,8]));
console.log(largest(1,2,7,4,8));
console.log(largest(1,2));
console.log(largest(2,1));
