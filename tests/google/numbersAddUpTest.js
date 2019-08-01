const assert = require('chai').assert;
const numbersAddUpOrNot = require('../../src/google/numbersAddUp.js');

let numbers = [10, 15, 3, 7];

assert.isTrue(numbersAddUpOrNot.addsUp(numbers, 17));
assert.isTrue(numbersAddUpOrNot.addsUp(numbers, 25));
assert.isFalse(numbersAddUpOrNot.addsUp(numbers, 90));
