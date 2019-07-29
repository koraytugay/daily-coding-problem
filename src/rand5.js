const Rand5 = {
    random : () => {
        const random = Math.floor(Math.random() * Math.floor(6)) + 1;
        return random > 5 ? Rand5.random() : random;
    }
};

module.exports = Rand5;
