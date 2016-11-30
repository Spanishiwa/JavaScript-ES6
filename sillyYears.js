function sillyYears(int) {
  let closestSubsequentYears = [];
  let posIdx = 1;
  let negIdx = -1;

  while (closestSubsequentYears.length < 11) {
    let posCheck = (int+posIdx);
    let negCheck = (int+negIdx);

    if (Math.floor(posCheck/100) + posCheck%100 === Math.floor(posCheck%1000/10)) {
      closestSubsequentYears.push(posCheck);
    }

    if (Math.floor(negCheck/100) + negCheck%100 === Math.floor(negCheck%1000/10)) {
      closestSubsequentYears.push(negCheck);
    }

    posIdx += 1;
    negIdx -= 1;
  }

  return closestSubsequentYears;
}
