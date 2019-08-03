const expect = require('chai').expect;
const encoding = require('../../src/amazon/runLengthEncoding');

expect(encoding.encode('AAAABBB')).to.eq('4A3B');
expect(encoding.decode('4A3B')).to.eq('AAAABBB');
