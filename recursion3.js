function exponential(nBase, nExponent) {
  return nExponent === 0 ? 1 : (exponential(nBase, (nExponent-1)) * nBase);
}

console.log(exponential(2,3));
