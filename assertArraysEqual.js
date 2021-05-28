"use strict";

// const assertEqual = function (actual, expected) {
//   if (actual === expected)
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
// };

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

// const assertArraysEqual = function (arr1, arr2) {
//   console.log(assertEqual(eqArrays(arr1, arr2)));
// };

const assertArraysEqual = function (actual, expected) {
  if (eqArrays)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
