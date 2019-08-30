// Given a string and a set of characters,
// return the shortest substring containing all the characters in the set.
//
// Given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".
exports.shortest = (/** String **/ string, /** Set **/ characters) => {
    let shortest = null;
    string.split("").forEach((char, index) => {
        if (characters.has(char))
            for (let i = index; i < string.length; i++) {
                let substring = string.substr(index, i);
                let copy = new Set(characters);
                for (let c of substring)
                    copy.delete(c);
                if (copy.size === 0 && (!shortest || substring.length < shortest.length))
                    shortest = substring;
            }
    });
    return shortest;
};
