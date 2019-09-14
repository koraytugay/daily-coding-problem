// Implement the singleton pattern with a twist.
// Instead of storing one instance, store two instances.
// In every even call of getInstance(), return the first instance.
// In every odd call of getInstance(), return the second instance.
module.exports = (function () {
    function SingletonWithTwist(variant) {
        return {
            variant: variant
        }
    }

    let even = new SingletonWithTwist('even');
    let odd = new SingletonWithTwist('odd');
    let isEven = false;

    return {
        getInstance: () => {
            isEven = !isEven;
            return isEven ? even : odd;
        }
    }
})();
