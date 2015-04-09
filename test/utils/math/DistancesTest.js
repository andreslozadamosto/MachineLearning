var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    Distances = require('./../../../lib/utils/math/Distances').Distances,
    Point = require('./../../../lib/utils/math/Point').Point,
    mock = require('simple-mock');


describe('Distances', function() {
    describe('#Euclidea()', function() {
        it('Va;il', function() {
            var pointFrom = new Point();
            mock.mock(pointFrom, 'dims', function() {
                return [2, 7];
            });

            var pointTo = new Point();
            mock.mock(pointTo, 'dims', function() {
                return [1, 2];
            });

            assert.equal(Distances.Euclidea2(pointFrom, pointTo), Math.sqrt(26));
        });
    });
});
