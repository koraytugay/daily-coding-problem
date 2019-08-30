const assert = require('chai').assert;
const addsUp = require('../../src/google/numbersAddUp.js');

let numbers = [10, 15, 3, 7];

assert.isTrue(addsUp(numbers, 17));
assert.isTrue(addsUp(numbers, 25));
assert.isFalse(addsUp(numbers, 90));
