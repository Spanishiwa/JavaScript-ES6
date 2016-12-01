function quickSort(nums) {
  if (nums.length < 2) {
    return nums;
  }

  let pivot = nums[0];
  let left = [];
  let right = [];


  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i]);
    }
  }

  let orderedLeft = quickSort(left);
  let orderedRight = quickSort(right);

  return orderedLeft.concat(pivot).concat(orderedRight);
}

console.log(quickSort([1,5,2,3,5,1,2,4]));
