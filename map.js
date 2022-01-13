"use strict";
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

const words = ["ground", "control", "to", "major", "tom"];

// Example:
// const results1 = map(words, (word) => word[0]);
// console.log(results1);
// ReferenceError : map is not defined

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const callback = (word) => word[0];

assertArraysEqual(map(words, callback), ["g", "c", "t", "m", "t"]);
