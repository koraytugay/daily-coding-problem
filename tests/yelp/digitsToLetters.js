const expect = require('chai').expect;
const digitsToLetters = require('../../src/yelp/digitsToLetters');

// https://stackoverflow.com/questions/17526805/chai-test-array-equality-doesnt-work-as-expected
const allCombinations = digitsToLetters.digitsToLetters({"2" : ["a", "b", "c"], "3" : ["d", "e", "f"]}, "23");
expect(allCombinations).eql(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
