"use strict";

const takeUntil = function (array, callback) {
  let newArr = [];
  // loop through the array
  for (let item of array) {
    if (!callback(item)) {
      newArr.push(item);
    } else {
      return newArr;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// [1, 2, 5, 7, 2];
// ---
// ["I've", "been", "to", "Hollywood"];

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

// const assertArraysEqual = function (actual, expected) {
//   if (eqArrays)
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
// };
