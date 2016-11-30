function myMap(arr, cb) {
  let mappedArr = [];

  arr.forEach((el) => {
    mappedArr.push(cb(el));
  });

  return mappedArr;
}
