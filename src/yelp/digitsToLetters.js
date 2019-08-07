// Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent.
// You can assume each valid number in the mapping is a single digit.
//
// For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”]} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

module.exports = {
    digitsToLetters: (mappingData, val) => {
        const filtered = [];
        for (let char of val.split(''))
            filtered.push(mappingData[char]);

        const combinations = [];
        for (let i = 0; i < filtered.length - 1; i++)
            for (let char of filtered[i])
                for (let j = 1; j < filtered.length; j++)
                    for (let surrogate of filtered[j])
                        combinations.push("".concat(char, surrogate));

        return combinations;
    }
};
