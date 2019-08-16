// Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed
// to make the string valid (i.e. each open parenthesis is eventually closed).
//
// For example, given the string "()())()", you should return 1.
// Given the string ")(", you should return 2, since we must remove all of them.
exports.normalise = function normalise(/*string*/ string) {
    let removeCount = 0, stateClosed = true;

    string.split('').forEach(char => {
        switch (char) {
            case '(':
                if (stateClosed)
                    stateClosed = false;
                else
                    removeCount++;
                break;
            case ')':
                if (stateClosed)
                    removeCount++;
                else
                    stateClosed = true;
                break;
        }
    });

    return stateClosed ? removeCount : ++removeCount;
};
