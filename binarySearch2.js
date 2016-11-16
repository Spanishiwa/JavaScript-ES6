function bsearch(nums, target) {
  if (nums.length === 0) {
    return -1;
  }
  let mid = Math.floor(nums.length/2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid+1);

  if (nums[mid] === target) {
    return mid;
  }
  else if (target < nums[mid]) {
    return bsearch(left, target);
  }
  else if (target > nums[mid]) {
    let result = bsearch(right, target);
    return (result === -1) ? -1 : (result + mid + 1);
  }
}

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);
console.log(`bsearch([1, 2, 2.5, 3, 4, 5], 2.5) = ${bsearch([1, 2, 2.5, 3, 4, 5], 2.5)}`);
