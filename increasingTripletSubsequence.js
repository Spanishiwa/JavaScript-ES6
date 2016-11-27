function increasingTriplet(nums) {
  for (let i = 0; i < nums.length - 2; i += 1) {
    let sequential = nums[i+2] > nums[i+1] && nums[i+1] > nums[i];

    if (sequential) {
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([1,2,-10,-8,-7]));
console.log(increasingTriplet([5,1,5,5,2,5,4]));
