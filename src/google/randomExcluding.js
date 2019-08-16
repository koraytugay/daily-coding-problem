exports.random = function randomExcluding(n, /*array*/ excluding) {
    let number = Math.floor(Math.random() * Math.floor(n));
    return new Set(excluding).has(number) ? randomExcluding(n, excluding) : number;
};
