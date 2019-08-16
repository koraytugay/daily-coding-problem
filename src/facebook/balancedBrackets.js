// Given a string of round, curly, and square open and closing brackets,
// return whether the brackets are balanced (well-formed).
//
// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.
exports.isBracketsBalanced = function (aString) {
    let chars = [];

    for (let c of aString.split(""))
        if ("[({".includes(c)) chars.push(c);
        else if (chars.length === 0) return false;
        else switch (c) {
            case ']': if (chars.pop() !== '[') return false; break;
            case ')': if (chars.pop() !== '(') return false; break;
            case '}': if (chars.pop() !== '{') return false; break;
        }

    return chars.length === 0;
};
