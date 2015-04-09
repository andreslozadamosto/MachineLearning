var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    Point = require('./../../../lib/utils/math/Point').Point;


describe('Point', function() {
    describe('#add()', function() {
        it('Only accept to add valid numbers', function() {
            var point = new Point();
            var test = [3, 5, "null", null, undefined, 877, {}, function() {}, 45, new Object()];

            point.add(test);

            assert.equal(point.dims().length, 4);
        });
    });

    describe('#dims()', function() {
        it('Should return a deep copy of the current dimension list, but allways different', function() {
            var point = new Point();
            point.add([5, 6, 8]);

            var dimeList1 = point.dims();
            var dimeList2 = point.dims();

            assert.equal(dimeList1.length, 3);
            assert.equal(dimeList2.length, 3);
            // allways bring a different copy
            assert.notEqual(dimeList1, dimeList2);
        });

        it('if remove a item on copy don\'t affect the dimension list of Point', function() {
            var point = new Point();
            point.add([5, 6, 8]);

            var dimeList = point.dims();
            dimeList.pop();

            assert.equal(dimeList.length, 2);
            assert.equal(point.dims().length, 3);
        });
        
        if('if add a new dimension on the Point don\'t affect the copy', function(){
            var point = new Point();
            point.add([5, 6, 8]);

            var dimeList = point.dims();
            point.add(9);

            assert.equal(point.dims().length, 4);
            assert.equal(dimeList.length, 3);
        });
    });
});