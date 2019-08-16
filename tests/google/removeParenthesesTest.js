const expect = require('chai').expect;
const removeParentheses = require('../../src/google/removeParentheses');

expect(removeParentheses.normalise("()")).eq(0);
expect(removeParentheses.normalise("()()")).eq(0);
expect(removeParentheses.normalise("()())()")).eq(1);
expect(removeParentheses.normalise(")(")).eq(2);
expect(removeParentheses.normalise("(")).eq(1);
expect(removeParentheses.normalise(")")).eq(1);
expect(removeParentheses.normalise("(((()")).eq(3);
expect(removeParentheses.normalise("())))")).eq(3);
expect(removeParentheses.normalise("))()(()(")).eq(4);
expect(removeParentheses.normalise("))()(())")).eq(4);
