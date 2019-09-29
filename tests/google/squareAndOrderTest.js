const expect = require('chai').expect;
const squareAndOrder = require('../../src/google/squareAndOrder');

expect(squareAndOrder.squareAndOrder([-3, 0, 2])).eql([0, 4, 9]);
