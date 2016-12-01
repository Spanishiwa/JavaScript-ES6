function binarySearch(nums, target) {
  let midIdx = Math.floor(nums.length / 2);
  let left = nums.slice(0, midIdx);
  let right = nums.slice(midIdx + 1, nums.length);

  if (nums.length < 1) {
    return NaN;
  }
  else if (target === nums[midIdx]) {
    return midIdx;
  }
  else if (target < nums[midIdx]) {
    return binarySearch(left, target);
  }
  else {
    let result = binarySearch(right, target);
    return result + midIdx + 1;
  }
}

console.log(binarySearch([1,2,5,6,9,11,15], 15));
console.log(binarySearch([1,2,5,6,9,11,15], 1));
console.log(binarySearch([1,2,5,6,9,11,15], 9));
console.log(binarySearch([1,2,5,6,9,11,15], 99));
