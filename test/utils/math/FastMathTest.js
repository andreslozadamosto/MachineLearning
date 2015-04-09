var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    FastMath = require('./../../../lib/utils/math/FastMath').FastMath;


describe('FastMath', function() {
    describe('#pow()', function() {
        it('should be corret', function() {
            assert.equal(FastMath.pow(2, 3), 8);
            assert.equal(FastMath.pow(100, 3), 1000000);
        });
    });
});