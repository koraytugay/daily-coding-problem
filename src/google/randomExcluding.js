// Given an integer n and a list of integers l,
// write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).
exports.random = function randomExcluding(n, /*array*/ l) {
    let number = Math.floor(Math.random() * Math.floor(n));
    return new Set(l).has(number) ? randomExcluding(n, l) : number;
};
