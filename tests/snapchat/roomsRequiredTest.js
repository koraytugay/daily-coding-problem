const expect = require('chai').expect;
const roomsRequired = require('../../src/snapchat/roomsRequired');

expect(roomsRequired.roomsRequired([[30, 75], [0, 50], [60, 150]]).length).eq(2);
