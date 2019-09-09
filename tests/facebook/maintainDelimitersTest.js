const expect = require('chai').expect;
const maintainDelimiters = require('../../src/facebook/maintainDelimiters');

let delimiters = new Set(['/', ':', '?', '!']);

let toReverse = 'hello/world:here'.split('');
let expected = 'here/world:hello';
expect(maintainDelimiters.reverseKeepDelimiters(toReverse, delimiters)).eq(expected);

toReverse = 'hello//world::here'.split('');
expected = 'here//world::hello';
expect(maintainDelimiters.reverseKeepDelimiters(toReverse, delimiters)).eq(expected);

toReverse = 'hello//world::here??'.split('');
expected = 'here//world::hello??';
expect(maintainDelimiters.reverseKeepDelimiters(toReverse, delimiters)).eq(expected);

toReverse = '?hello/world:here'.split('');
expected = '?here/world:hello';
expect(maintainDelimiters.reverseKeepDelimiters(toReverse, delimiters)).eq(expected);

toReverse = '?hello/world:here!'.split('');
expected = '?here/world:hello!';
expect(maintainDelimiters.reverseKeepDelimiters(toReverse, delimiters)).eq(expected);
