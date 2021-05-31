"use strict";
const eqArrays = require("./eqArrays");
// const eqArrays = function (values1, values2) {
//   if (values1.length !== values2.length) {
//     return false;
//   }

//   for (let i = 0; i < values1.length; i++) {
//     if (values1[i] !== values2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
const assertArraysEqual = require("./assertArraysEqual");
// const assertArraysEqual = function (arr1, arr2) {
//   console.log(eqArrays(arr1, arr2));
// };

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

module.exports = middle;
