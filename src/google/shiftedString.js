// Given two strings A and B, return whether or not
// A can be shifted some number of times to get B.
//
// If A is abcde and B is cdeab, return true.
// If A is abc and B is acb, return false.
exports.canBeShifted = function (/**string**/ a, /**string**/b) {
    let chars = a.split('');
    for (let i = 0; i < a.length - 1; i++) {
        let lastChar = chars[chars.length - 1];
        for (let j = chars.length - 2; j >= 0; j--)
            chars[j + 1] = chars[j];
        chars[0] = lastChar;
        if (b === chars.join(''))
            return true;
    }
    return false;
};
