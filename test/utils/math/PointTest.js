var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    Point = require('./../../../lib/utils/math/Point').Point;


describe('Point', function() {
    describe('#add()', function() {
        it('Adds values', function(){
            var point = new Point();
            
            point.add(5);
            point.add(7);
            
            assert.equal(point.magnitude(), 2);
        });
        
        it('Only accept to add valid numbers', function() {
            var point = new Point();
            var test = [3, 5, "null", null, undefined, 877, {}, function() {}, 45, new Object()];

            point.add(test);

            assert.equal(point.dims().length, 4);
        });
        
    });
    
    describe('#get()', function(){
       it("get the second value", function(){
           var point = new Point();
           
           point.add(5);
           point.add(9);
           
           assert.equal(point.get(2), 9);
       }); 
       
       it('get a position that not exist - returns null', function(){
           var point = new Point();
           
           assert.equal(point.get(3), null);
           
           point.add(3);
           
           assert.equal(point.get(3), null);
       });
       
       it('get nan as parameter to get function', function(){
          var point = new Point();
          
          assert.equal(point.get(Math.NaN), null);
       });
    });
    
    describe('#rem()', function(){
        it('remove an element', function(){
            var point = new Point();
       
            point.add(4);
            point.add(5);
            point.add(256);
            point.add(8763);
            
            point.rem(2);
            
            assert.equal(point.magnitude(), 3);
            assert.equal(point.get(1), 4);
            assert.equal(point.get(2), 256);
            assert.equal(point.get(3), 8763);
        });
        
        it('try to remove passing nan as parameter - have to not affect', function(){
           var point = new Point();
           
           point.add(5);
           point.rem(Math.NaN);
           
           assert.equal(point.magnitude(), 1);
           assert.equal(point.get(1), 5);
        });
        
        it('try to remove a item out of range - have to not affect', function(){
           var point = new Point();
           
           point.add(5);
           point.rem(78);
           
           assert.equal(point.magnitude(), 1);
           assert.equal(point.get(1), 5);
        });
    });
    
    describe('#magnitude()', function(){
       it('have to return the correct dimention of the point', function(){
          var point = new Point();
          
          point.add(5);
          point.add(6);
          point.rem(1);
          point.rem(6);
          point.add(8);
          
          assert.equal(point.magnitude(), 2);
       });
       
       it('have to don\'t add non numerric values', function(){
          var point = new Point();
          
          point.addRange([5,"dg", 3, {}]);
          
          assert.equal(point.magnitude(), 2);
          assert.equal(point.get(1), 5);
          assert.equal(point.get(2), 3);
       });
    });
    
    describe('#addRange()', function(){
       it('have to add values to the previous added', function() {
          var point = new Point();
          
          point.add(5);
          point.addRange([5,6,7,8]);
          
          assert.equal(point.magnitude(), 5);
          assert.equal(point.get(1),5);
          assert.equal(point.get(2),5);
          assert.equal(point.get(3),6);
          assert.equal(point.get(4),7);
          assert.equal(point.get(5),8);
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
        
        it('if add a new dimension on the Point don\'t affect the copy', function(){
            var point = new Point();
            point.add([5, 6, 8]);

            var dimeList = point.dims();
            point.add(9);

            assert.equal(point.dims().length, 4);
            assert.equal(dimeList.length, 3);
        });
    });
});