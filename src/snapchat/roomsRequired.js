// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

exports.roomsRequired = function roomsRequired(lectureIntervals) {
    function Room() {
        return {
            busy: []
        };
    }

    let rooms = [];

    lectureIntervals.forEach(lectureInterval => {
        let roomFound = false;
        rooms.forEach(room => {
            let roomBusyInLectureHours = false;
            room.busy.forEach(reserved => {
                if (lectureInterval[0] > reserved[0] && lectureInterval[0] < reserved[1]) roomBusyInLectureHours = true;
                if (lectureInterval[1] > reserved[0] && lectureInterval[1] < reserved[1]) roomBusyInLectureHours = true;
            });
            if (!roomBusyInLectureHours) {
                room.busy.push(lectureInterval);
                roomFound = true;
            }
        });
        if (!roomFound) {
            let room = new Room();
            room.busy.push(lectureInterval);
            rooms.push(room);
        }
    });

    return rooms;
};
