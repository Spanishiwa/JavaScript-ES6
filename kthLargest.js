function findKthLargest(nums, k) {
  return nums.sort(function(p, c) {
    return p-c;
  })[nums.length-k];
}

console.log(`find kth largest: ${findKthLargest([3,2,1,5,6,4], 2)}`);
console.log(`find kth largest: ${findKthLargest([-1, -1], 2)}`);
