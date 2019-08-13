// Given a list of possibly overlapping intervals,
// return a new list of intervals where all overlapping intervals have been merged.
// The input list is not necessarily ordered in any way.
//
// Given [(1, 3), (4, 10), (5, 8), (20, 25)], you should return
//       [(1, 3), (4, 10), (20, 25)].
exports.overlapping = function (intervals) {
    const containedBy = (interval, other) => interval[0] <= other[0] && interval[1] >= other[1];
    const indicesToRemove = new Set();
    for (let i = 0; i < intervals.length - 1; i++)
        for (let j = i + 1; j < intervals.length; j++) {
            if (containedBy(intervals[i], intervals[j])) indicesToRemove.add(j);
            if (containedBy(intervals[j], intervals[i])) indicesToRemove.add(i);
        }
    return intervals.filter((value, index) => !indicesToRemove.has(index));
};
