// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.
module.exports = {
    findPerfectNumber: (n) => {
        let curr = 0;
        for (let i = 19; i < Number.MAX_SAFE_INTEGER; i++) {
            let sum = 0;
            for (let s of i.toString().split("")) sum += parseInt(s);
            if (sum === 10) if (++curr === n) return i;
        }
    }
};
