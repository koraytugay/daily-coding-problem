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
                let lectureStart = lectureInterval[0];
                let lectureEnd = lectureInterval[1];
                let reservedStart = reserved[0];
                let reservedEnd = reserved[1];
                if (lectureStart > reservedStart && lectureStart < reservedEnd) {
                    roomBusyInLectureHours = true;
                }
                if (lectureEnd > reservedStart && lectureEnd < reservedEnd) {
                    roomBusyInLectureHours = true;
                }
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
