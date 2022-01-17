"use strict";

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function (array) {
  const output = [];

  if (array.length === 1 || array.length === 2) return output;

  if (array.length % 2 !== 0) {
    output.push(Math.ceil(array.length / 2));
  } else if (array.length % 2 === 0) {
    output.push(array.length / 2, array.length / 2 + 1);
  }
  return output;
};

middle([1]);
middle([1, 2]);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);

module.exports = middle;
