function bulbSwitcher(n) {
  let bulbs = Array(n).fill("on");
  let idx = 0;

  while (idx < n) {
    for (let i = 0; i < n; i += 1) {
      // console.log(bulbs);
      // console.log(`i is ${i}, idx is ${idx}, i%idx+1 ${(i+1)%i}`);
      if ((idx+1)%i === 0) {
        if (bulbs[i] === "off") {
          bulbs[i] = "on";
        }
        else {
          bulbs[i] = "off";
        }
      }

    }
  idx += 1;

  }

  let count = 0;
  bulbs.forEach(function(bulb) {
    if (bulb === "on") {
      count += 1;
    }
  });

  return count;
}

console.log(bulbSwitcher(3));
