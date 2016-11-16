function bubbleSort(arr) {
  let sorted = false;
  while (!(sorted)) {
    sorted = true;

    for(let i = 0; i < arr.length-1; i += 1) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([6,4,0, 3,-2,1,1,6,-3]));
