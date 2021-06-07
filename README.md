# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @knagayama76/lotide`

**Require it:**

`const _ = require('@knagayama76/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual(Array)`: assert return values of two arrays
- `assertEqual(Array)`: assert identical values
- `assertObjectEqual(Object)`: assert return values of two objects
- `countLetters(string)`: take in a sentence and return a count of each of the letters in the sentence
- `countOnly`: take in a collection of items and return counts for specific subset of items
- `eqArrays(Arrays)`: compare two arrays are equal
- `eqObjects(Object)`: compare two objects are equal
- `findKey(Object)`: returns the key of the first element
- `findKeyByValue(Object)`: return the first key which contains the given value
- `head(Array)`: retrive the first element from the array
- `letterPositions(string)`: return all the indicates in the string where each character is found
- `map(Array)`: find given word in an array
- `middle(Array)`: retrive the middle element from the array
- `tail(Array)`: retrive the last element from the array
- `takeUntil(Array)`: keep collecting items from a provided arrray until return truthy value
- `without(Array)`: remove unwanted element
