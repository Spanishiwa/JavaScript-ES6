// function range(start, end) {
//   let result = [];
//   if (end < start) {
//     return result;
//   }
//   for (let i = start; i < end; i += 1) {
//     result.push(i);
//   }
//   return result;
// }


function range(start, end) {
  if (end < start) {
    return [];
  }

  if (end === start) {
    return [];
  }

  let result = range(start, (end-1));
  result.push((end-1));

  return result;
}

function recSum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let lastNum = arr[(arr.length-1)];
  return recSum(arr.slice(0, arr.length-1)) + lastNum;
}

console.log(recSum([1,2,3,4,5]));
