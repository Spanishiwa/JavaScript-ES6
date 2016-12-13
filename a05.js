// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function(start, end) {
  if (typeof end === "undefined") {
    end = this.length;
  }

  const slicedResult = [];

  for (let i = start; i < end; i += 1) {
    slicedResult.push(this[i]);
  }

  return slicedResult.join('');
};

// write Array.prototype.myReduce (analogous to Ruby's Array#inject).
Array.prototype.myReduce = function(cb) {
  let accum = this[0];

  for (let i = 1; i < this.length; i += 1) {
    accum = cb(accum, this[i]);
  }

  return accum;
};
// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

Array.prototype.quickSort = function(comparator) {
  if (this.length <= 1) {
    return this;
  }
  if (typeof comparator !== "function") {
    comparator = (x, y) => {
      if (x > y) {
        return 1;
      }
      else if (x < y) {
        return -1;
      }
      else {
        return 0;
      }
    };
  }

  const pivot = this[0];
  const left = [];
  const right = [];

  for (let i = 1; i < this.length; i += 1) {
    if (comparator(pivot, this[i]) > 0) {
      left.push(this[i]);
    }
    else {
      right.push(this[i]);
    }
  }

  return left.quickSort(comparator)
    .concat([pivot]).concat(right.quickSort(comparator));
};

function myFind(array, cb) {

  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i]) === true) {
      return array[i];
    }
  }

  return undefined;
}
// write sumNPrimes(n)

function sumNPrimes(n) {
  const primes = [];
  let idx = 2;

  while (primes.length < n) {
    if (isPrime(idx)) {
      primes.push(idx);
    }

    idx += 1;
  }

  return primes.reduce( (n1, n2) => {
    return (n1 + n2);
  }, 0);
}

function isPrime(n) {
  let prime = true;

  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      prime = false;
    }
  }

  return prime;
}

// write Function.prototype.myBind.

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

// write Function.prototype.inherits.
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
