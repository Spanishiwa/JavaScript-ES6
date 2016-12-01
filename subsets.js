function subsets(arr) {
  if (arr.length < 1) {
    return [[]];
  }
  let val = arr[0];
  let subs = subsets(arr.slice(1, arr.length));

  let combos = subs.map(sub => sub.concat(val));

  return subs.concat(combos);
}

// console.log(subsets([1, 2]));
console.log(subsets([1, 2, 3]));
