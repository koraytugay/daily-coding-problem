const expect = require('chai').expect;
const rotateList = require('../../src/facebook/rotateList');

let rotator = new rotateList();
let rotate = rotator.rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

expect(rotate).eql([3, 4, 5, 6, 7, 8, 9, 10, 1, 2]);
