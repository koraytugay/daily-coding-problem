const expect = require('chai').expect;
const roomsRequired = require('../../src/snapchat/roomsRequired');

expect(roomsRequired.roomsRequired([[30, 75], [0, 50], [60, 150]]).length).eq(2);
expect(roomsRequired.roomsRequired([[5, 7], [0, 9], [5, 9]]).length).eq(3);
