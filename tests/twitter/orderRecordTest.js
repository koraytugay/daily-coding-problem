const expect = require('chai').expect;
const orderRecord = require('../../src/twitter/orderRecord');

let record = orderRecord.orderRecord();

record.record(10);
record.record(20);
record.record(30);
record.record(40);

expect(record.getLast(1)).eq(40);
expect(record.getLast(4)).eq(10);

record = orderRecord.orderRecord();

record.record(100);
record.record(200);
record.record(300);
record.record(400);

expect(record.getLast(1)).eq(400);
expect(record.getLast(4)).eq(100);