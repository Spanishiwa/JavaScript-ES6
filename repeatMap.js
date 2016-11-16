function accum(s) {
	// your code
  let resultArr = s.split('').map(function(x, i) {
    return x.toUpperCase() + x.toLowerCase().repeat(i)
  });
  return resultArr.join('-');
}
