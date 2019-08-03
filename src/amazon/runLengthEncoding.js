// Run-length encoding is a fast and simple method of encoding strings.
// The basic idea is to represent repeated successive characters as a single count and character.
// For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
module.exports = {
    encode: (s) => {
        let encoded = [];

        let currChar = '';
        let currCount = 0;

        Array.from(s).forEach(char => {
            if (currChar !== char) {
                if (currCount > 0) {
                    encoded.push(currCount);
                    encoded.push(currChar);
                }
                currChar = char;
                currCount = 1;
            } else {
                currCount++;
            }
        });

        encoded.push(currCount);
        encoded.push(currChar);

        return encoded.join('');
    },
    decode: (s) => {
        let decoded = [];

        for (let i = 0; i < s.length; i = i + 2)
            for (let j = 0; j < s.charAt(i); j++)
                decoded.push(s.charAt(i + 1));

        return decoded.join('');
    }
};
