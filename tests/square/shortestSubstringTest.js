const expect = require('chai').expect;
const shortest = require('../../src/square/shortestSubstring');

expect(shortest.shortest("figehaeci", new Set(['a', 'e', 'i']))).eq("aeci");
