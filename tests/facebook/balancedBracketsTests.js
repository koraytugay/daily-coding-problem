const expect = require('chai').expect;
const balancedBrackets = require('../../src/facebook/balancedBrackets');

expect(balancedBrackets.isBracketsBalanced("[]")).to.be.true;
expect(balancedBrackets.isBracketsBalanced("[")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("]")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("[[")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("([])[]({})")).to.be.true;
expect(balancedBrackets.isBracketsBalanced("((()")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("()))")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("[{([])}]")).to.be.true;
expect(balancedBrackets.isBracketsBalanced("[{(")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("([])))")).to.be.false;
expect(balancedBrackets.isBracketsBalanced("]]]]")).to.be.false;
