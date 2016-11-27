function findKthLargest(nums, k) {
  let uniq = [];

  nums.forEach(function(num) {
    if (!uniq.includes(num)) {
      uniq.push(num);
    }
  });

  return uniq.sort()[k];
}

console.log(`find kth largest: ${findKthLargest([3,2,1,5,6,4], 2)}`);
