var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    Distances = require('./../../../lib/utils/math/Distances').Distances,
    Point = require('./../../../lib/utils/math/Point').Point,
    mock = require('simple-mock');


describe('Distances', function() {
    describe('#Euclidea()', function() {
        it('Valid', function() {
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
    
    describe('#Manhattan()', function(){
       it('calculate Manhattan distance correclty', function() {
            var pointFrom = new Point();
            mock.mock(pointFrom, 'dims', function(){ return [2,1];});
            mock.mock(pointFrom, 'magnitude', function(){ return 2;});
            var pointTo = new Point();
            mock.mock(pointTo, 'dims', function(){ return [1,1];});
            mock.mock(pointTo, 'magnitude', function() { return 2;});
            
            assert.equal(Distances.Manhattan(pointFrom, pointTo), 1);
       });
    });
    
    describe('#Chebyshev()', function(){
        it('calculate the Chebyshev distance correclty', function(){
            var pointFrom = new Point();
            mock.mock(pointFrom, 'dims', function(){ return [5,1];});
            mock.mock(pointFrom, 'magnitude', function(){ return 2;});
            var pointTo = new Point();
            mock.mock(pointTo, 'dims', function(){ return [1,1];});
            mock.mock(pointTo, 'magnitude', function() { return 2;});
            
            assert.equal(Distances.Chebyshev(pointFrom, pointTo), 4);
        });
    })
});
