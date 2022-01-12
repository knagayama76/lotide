"use strict";

// const assertEqual = function (actual, expected) {
//   if (actual === expected)
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
// };

// function(takes 2 arrays)
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Imprelent assertArraysEqual which will take two arrays
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", 4, "3"], ["5", "2", "3"]);
