// Write a map implementation with a get function that
// lets you retrieve the value of a key at a particular time.
// It should contain the following methods:
//
// set(key, value, time): sets key to value for t = time.
// get(key, time): gets the key at t = time.
//
// The map should work like this.
// If we set a key at a particular time, it will maintain
// that value forever or until it gets set at a later time.
// In other words, when we get a key at a time, it should return
// the value that was set for that key set at the most recent time.
exports.timedMap = () => {
    return {
        data: {},
        set: function (key, value, time) {
            if (!this.data.key)
                this.data.key = [];
            this.data.key[time] = value;
        },
        get: function (key, time) {
            if (key in this.data)
                return null;
            let val = null;
            while (!val && time > -1)
                val = this.data.key[time--];
            return val === undefined ? null : val;
        }
    }
};
