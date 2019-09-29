// Write a function that rotates a list by k elements.
// For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2].
// Try solving this without creating a copy of the list.
module.exports = class RotateList {
    rotate(list, k) {
        let temp = [];

        for (let i = 0; i < k; i++)
            temp.push(list[i]);

        for (let i = k; i < list.length; i++)
            list[i - k] = list[i];

        for (let i = 0; i < k; i++)
            list[list.length - k + i] = temp.shift();

        return list;
    }
};
