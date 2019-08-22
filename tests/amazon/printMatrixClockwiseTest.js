const expect = require('chai').expect;
const printMatrixClockwise = require('../../src/amazon/printMatrixClockwise');

let s;

s = printMatrixClockwise.printMatrixClockwise([
    ['a', 'b'],
    ['c', 'd'],
]);

expect('abdc').eq(s);

s = printMatrixClockwise.printMatrixClockwise([
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
    ['q', 'r', 's', 't'],
    ['u', 'v', 'y', 'z'],
]);

expect('abcdhlptzyvuqmiefgkosrnj').eq(s);


s = printMatrixClockwise.printMatrixClockwise([
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
]);
expect('abcdhlponmiefgkj').eq(s);
