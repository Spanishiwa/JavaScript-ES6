function increasingTriplet(nums) {

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i+1; j < i; j += 1) {
      for (let k = i+2; k < j; k += 1) {
        console.log(`i, j, k ${i}, ${j}, ${k}`);
        let sequential = nums[i] < nums[j] && nums[j] < nums[k];
        let valid = nums[i] < nums[k];

        if (sequential && valid) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
// console.log(increasingTriplet([5, 4, 3, 2, 1]));
// console.log(increasingTriplet([1,2,-10,-8,-7]));
// console.log(increasingTriplet([5,1,5,5,2,5,4]));
