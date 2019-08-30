const expect = require('chai').expect;
const map = require('../../src/stripe/timedMap');

let timedMap;

// d.set(1, 1, 0) # set key 1 to value 1 at time 0
// d.set(1, 2, 2) # set key 1 to value 2 at time 2
// d.get(1, 1)    # get key 1 at time 1 should be 1
// d.get(1, 3)    # get key 1 at time 3 should be 2
timedMap = map.timedMap();
timedMap.set(1, 1, 0);
timedMap.set(1, 2, 2);
expect(timedMap.get(1, 1)).eq(1);
expect(timedMap.get(1, 3)).eq(2);

// d.set(1, 1, 5) # set key 1 to value 1 at time 5
// d.get(1, 0)    # get key 1 at time 0 should be null
// d.get(1, 10)   # get key 1 at time 10 should be 1
timedMap = map.timedMap();
timedMap.set(1, 1, 5);
expect(timedMap.get(1, 0)).eq(null);
expect(timedMap.get(1, 10)).eq(1);

// d.set(1, 1, 0) # set key 1 to value 1 at time 0
// d.set(1, 2, 0) # set key 1 to value 2 at time 0
// d.get(1, 0)    # get key 1 at time 0 should be 2
timedMap = map.timedMap();
timedMap.set(1, 1, 0);
timedMap.set(1, 2, 0);
expect(timedMap.get(1, 0)).eq(2);
