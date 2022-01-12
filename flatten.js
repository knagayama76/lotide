"use stict";

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) return true;
  }
};

// Imprelent assertArraysEqual which will take two arrays
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function (arr) {
  const output = [];
  for (const el of arr) {
    if (!Array.isArray(el)) output.push(el);
    else {
      for (const num of el) output.push(num);
    }
  }
  console.log(output);
};

flatten([1, 2, [3, 4], 5, [6]]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
