const expect = require('chai').expect;
const shiftedString = require('../../src/google/shiftedString');

expect(shiftedString.canBeShifted('abcde', 'cdeab')).eq(true);
expect(shiftedString.canBeShifted('abc', 'acb')).eq(false);
