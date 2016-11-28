function findPeakElement(nums) {
  let peaks = [];

  if (nums.length === 1) {
    return 0;
  }
  else if (nums.length === 2) {
    if (nums[1] > nums[0]) {
      return 1;
    }
    else if (nums[0] > nums[1]) {
      return 0;
    }
  }

  for (let i = 0; i < nums.length - 2; i += 1) {
    let left = nums[i];
    let right = nums[i+2];
    let peak = nums[i+1];

    if (peak > left && peak > right) {
      peaks.push((i+1));
    }
    else if (i === 0 && left > peak) {
      peaks.push(i);
    }
    else if (i === nums.length - 3 && right > peak) {
      peaks.push((i+2));
    }
  }

  return peaks[0];
}

console.log(findPeakElement([1, 2, 3, 1]));
