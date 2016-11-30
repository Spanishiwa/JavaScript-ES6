function substrings(str) {
  let substrangs = [];

  for (let i = 0; i <= str.length; i += 1) {
    for (let j = (i+1); j <= str.length; j += 1) {
      let substr = str.slice(i, j);
      if (!substrangs.includes(substr)) {
        substrangs.push(substr);
      }
    }
  }

  return substrangs;
}
