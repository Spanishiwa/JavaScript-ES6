let b = [1,4,5,2,3,4,2];

function bubbleSort(arr) {
  let sorted = false;
  while (sorted === false) {
    sorted = true;

    for(let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] <= arr[i+1])
        continue;
      else {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        sorted = false;
      }

    }
  }
return arr;
}

console.log(bubbleSort(b));
console.log(b);
