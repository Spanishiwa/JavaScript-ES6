function bubbleSort(arr) {
  let result = arr;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (i === arr.length-1) {
        continue;
      }
      if (result[i+1] < result[i]) {
        [result[i], result[i+1]] = [result[i+1], result[i]];
        sorted = false;
      }
    }
  }

  return result;
}

console.log(bubbleSort([5,2,1,3,5,1]));
