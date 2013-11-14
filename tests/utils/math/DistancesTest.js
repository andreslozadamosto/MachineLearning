var Distances = require('../../../lib/utils/math/Distances').Distances;

exports["calc dist euclidea to exes coordinates"] = function(test) {
    var euclidea = Distances.Euclidea;
    
    test.equal(euclidea([2,2]), Math.sqrt(8));
    test.ok(isNaN(euclidea([2,null])));
    test.ok(isNaN(euclidea([undefined,null])));
    test.ok(isNaN(euclidea([2,undefined])));
    test.ok(isNaN(euclidea([null,4])));
    test.ok(isNaN(euclidea([null, undefined])));
    test.ok(isNaN(euclidea([3, NaN])));
    test.ok(isNaN(euclidea([NaN, 3])));
        
    test.done();
}

exports["calc dist between two points"] = function(test) {
    var euclidea = Distances.Euclidea;
    
    test.equal(euclidea([3,3], [1,1]), Math.sqrt(8));
    test.equal(euclidea([3,3,5], [1,2,1]), Math.sqrt(21));
    test.ok(isNaN(euclidea([3,3,5], [1,2,NaN])));
    test.ok(isNaN(euclidea([3,3,undefined], [1,2,3])));
    
    test.done();
}

exports["Calc function with Eclidea function"] = function(test) {

    test.equal(Distances.Calc([3,3], [1,1], Distances.Euclidea), Math.sqrt(8));
    test.equal(Distances.Calc([3,3], [1,1]), Math.sqrt(8));
    test.equal(Distances.Calc([3,3], [1,1], null), Math.sqrt(8));
    test.equal(Distances.Calc([3,3], [1,1], undefined), Math.sqrt(8));
    
    test.done();
}

exports["Distance Manhattan"] = function(test) {
    
    var manhattan = Distances.Manhattan;
    
    test.ok(manhattan);    
    
    test.done();
}