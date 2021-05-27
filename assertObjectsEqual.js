"use strict";

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects2 = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // console.log(keys1); // ['a','b']
  // console.log(keys2); // ['b','a']

  // //They have the same number of keys
  const keys1Length = keys1.length;
  const keys2Length = keys2.length;
  if (keys1Length !== keys2Length) {
    return false;
  }

  // The value for each key in one object is the same as the value for that same key in the other object

  for (let key1 of keys1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (eqArrays(object1[key1], object2[key1])) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
};

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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${expected}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects2(cd, dc)); // => true
assertObjectsEqual(eqObjects2(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects2(cd, cd2)); // => false
assertObjectsEqual(eqObjects2(cd, cd2), false);
