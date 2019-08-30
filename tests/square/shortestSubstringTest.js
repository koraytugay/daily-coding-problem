const expect = require('chai').expect;
const shortest = require('../../src/square/shortestSubstring');

expect(shortest.shortest("figehaeci", new Set(['a', 'e', 'i']))).eq("aeci");
expect(shortest.shortest("ae", new Set(['a', 'e', 'i']))).eq(null);
expect(shortest.shortest("a", new Set(['a', 'e', 'i']))).eq(null);
expect(shortest.shortest("ae", new Set(['a', 'e', 'i']))).eq(null);
expect(shortest.shortest("aei", new Set(['a', 'e', 'i']))).eq("aei");
expect(shortest.shortest("aezzixxxxaezi", new Set(['a', 'e', 'i']))).eq("aezi");
