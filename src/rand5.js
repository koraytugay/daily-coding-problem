// Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, 
// implement a function rand5() that returns an integer from 1 to 5 (inclusive).
const Rand5 = {
    random : () => {
        const random = Math.floor(Math.random() * Math.floor(6)) + 1;
        return random > 5 ? Rand5.random() : random;
    }
};

module.exports = Rand5;
