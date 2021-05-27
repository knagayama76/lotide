const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(bestTVShowsByGenre["drama"]);

const findKeyByValue = function (objectKey, value) {
  const keys = Object.keys(objectKey);
  //console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    // console.log(objectKey[keys[i]]);
    if (objectKey[keys[i]] === value) {
      return keys[i];
    }
  }
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");

// console.log(Object.keys(bestTVShowsByGenre));
// console.log(Object.values(bestTVShowsByGenre));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object1));
// // expected output: Array ["a", "b", "c"]
