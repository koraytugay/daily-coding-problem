const expect = require('chai').expect;
const largestProduct = require('../../src/facebook/largestProduct');

expect(largestProduct.largestProduct([-10, -10, 5, 2])).eq(500);