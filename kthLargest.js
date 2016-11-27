function findKthLargest(nums, k) {
  let uniq = [];

  nums.forEach(function(num) {
    if (!uniq.includes(num)) {
      uniq.push(num);
    }
  });
  let len = uniq.length;
  if ((len - k) >= 0) {
    return uniq.sort()[len-k];
  }
  else {
    return uniq.sort()[len-1];
  }
}

console.log(`find kth largest: ${findKthLargest([3,2,1,5,6,4], 2)}`);
console.log(`find kth largest: ${findKthLargest([-1, -1], 2)}`);
