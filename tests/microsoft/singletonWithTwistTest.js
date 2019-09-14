const expect = require('chai').expect;
const singletonWithTwist = require('../../src/microsoft/singletonWithTwist');

expect(singletonWithTwist.getInstance().variant).eq('even');
expect(singletonWithTwist.getInstance().variant).eq('odd');
expect(singletonWithTwist.getInstance().variant).eq('even');
expect(singletonWithTwist.getInstance().variant).eq('odd');
