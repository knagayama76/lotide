"use strict";
// Our map function will take in two arguments:
// 1. An array to map
// 2. A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

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

assertArraysEqual(words, map);
