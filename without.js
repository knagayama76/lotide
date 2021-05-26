"use strict";

const assertArraysEqual = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      } else {
        return false;
      }
    }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++)
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        newArr.push(source[i]);
      }
    }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
