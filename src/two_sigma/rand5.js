// Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, 
// implement a function rand5() that returns an integer from 1 to 5 (inclusive).
function rand7() {
    return Math.floor(Math.random() * Math.floor(6)) + 1;
}

const Rand5 = {
    random5 : () => {
        const random = rand7();
        return random > 5 ? Rand5.random5() : random;
    }
};

module.exports = Rand5;
