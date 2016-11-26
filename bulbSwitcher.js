function bulbSwitcher(n) {
  let bulbs = Array(n).fill("off");

  for (let i = n; i < n; i += 1) {
    if ((i/(i+1)) === 0) {
      if (bulbs[i] === "off") {
        bulbs[i] = "on";
      }
      else {
        bulbs[i] = "off";
      }
    }

  }

  return bulbs;
}

console.log(bulbSwitcher(3));
