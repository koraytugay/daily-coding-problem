const expect = require('chai').expect;
const randomExcluding = require('../../src/google/randomExcluding');

for (let i = 0; i < 10; i++) {
    let map = new Map();
    map.set(3, 0);
    map.set(4, 0);

    for (let i = 0; i < 2000000; i++) {
        let number = randomExcluding.random(5, [0, 1, 2]);
        map.set(number, map.get(number) + 1);
    }

    expect(map.get(3) - map.get(4)).lessThan(4000); // 0.2 % difference acceptable
    expect(map.size).eq(2);
}
