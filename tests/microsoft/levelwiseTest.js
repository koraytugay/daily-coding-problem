const expect = require('chai').expect;
const levelwise = require('../../src/microsoft/levelwise');

let _1 = levelwise.Node(1),
    _2 = levelwise.Node(2),
    _3 = levelwise.Node(3),
    _4 = levelwise.Node(4),
    _5 = levelwise.Node(5),
    _6 = levelwise.Node(6);

_1.left = _2;
_3.left = _4;
_4.left = _6;

_1.right = _3;
_3.right = _5;

expect(levelwise.levelWise(_1)).eq('1,2,3,4,5,6');
expect(levelwise.levelWise(_6)).eq('6');
