const expect = require('chai').expect;
const Rand5 = require('./../src/rand5');

let freq = [];
freq.length = 6;
freq.fill(0);

for (let i = 0; i < 100000; i++)
    freq[Rand5.random5()]++;

expect(freq[0]).to.equal(0);
for (let i = 1; i < 6; i++)
    expect(freq[i]).to.greaterThan(19000);
