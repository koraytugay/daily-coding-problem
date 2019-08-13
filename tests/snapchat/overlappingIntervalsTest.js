const expect = require('chai').expect;
const intervals = require('../../src/snapchat/overlappingIntervals');

expect(intervals.overlapping([
    [1, 5],
    [2, 4]
])).eqls([
    [1, 5]
]);

expect(intervals.overlapping([
    [1, 3],
    [4, 10],
    [5, 8],
    [20, 25]
])).eqls([
    [1, 3],
    [4, 10],
    [20, 25]
]);
