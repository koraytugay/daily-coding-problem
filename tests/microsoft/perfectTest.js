const expect = require('chai').expect;
const perfect = require('../../src/microsoft/perfect');

expect(perfect.findPerfectNumber(1)).eq(19);
expect(perfect.findPerfectNumber(2)).eq(28);
expect(perfect.findPerfectNumber(3)).eq(37);
expect(perfect.findPerfectNumber(15)).eq(154);
