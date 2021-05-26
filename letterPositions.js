"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
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

const letterPositions = function (sentence) {
  const results = {};

  // looping over the sentence and get each letters
  for (let i = 0; i < sentence.length; i++) {
    //console.log(sentence[i]);
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      //results[sentence[i]] += 1;
      //results[sentence[i]] = results[sentence[i]] + 1
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions("hello"));
// Object: results
// Key: letter, key
// Value: number, results[key],

//assertArraysEqual(letterPositions("hello").e, [1]);

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

// if (results[sentence[i]]) {
//   results[sentence[i]] += 1;
// } else {
//   results[sentence[i]] = 1;
// }
