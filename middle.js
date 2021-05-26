"use strict";

const eqArrays = function (values1, values2) {
  if (values1.length !== values2.length) {
    return false;
  }

  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
};

const middle = function (array) {
  let newArr = [];
  if (array.length <= 2) {
    return newArr;
    // check if its even
  } else if (array.length % 2 === 0) {
    const index = array.length / 2;
    newArr.push(array[index - 1], array[index]);
    // if not even
  } else {
    const index = (array.length - 1) / 2;
    newArr.push(array[index]);
  }
  return newArr;
};

assertArraysEqual(middle([1, 2, 3]), [2]);

// For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
