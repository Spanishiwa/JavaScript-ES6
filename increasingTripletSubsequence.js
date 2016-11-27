function increasingTriplet(nums) {
  for (let i = 0; i < nums.length - 2; i += 1) {
    let sequential = nums[i+2] > nums[i+1] && nums[i+1] > nums[i];
    let positive = nums[i+2] >= 0 && nums[i+1] >= 0 && nums[i] >= 0;

    if (sequential && positive) {
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
