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

s = printMatrixClockwise.printMatrixClockwise([
        ['00', '20', '30', '40', '50'],
        ['60', '70', '80', '90', '10'],
        ['11', '12', '13', '14', '15'],
        ['16', '17', '18', '19', '20']
    ]
);
expect('0020304050101520191817161160708090141312').eq(s);
