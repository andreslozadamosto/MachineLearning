var ValidationUtils = require('./../ValidationUtils').ValidationUtils,
    Point = require('./Point').Point,
    FastMath = require("./FastMath").FastMath;


var Distances = {
    
    
    Euclidea2: function(pointA, pointB) {
        var ret = Math.NaN;
        if(ValidationUtils.isTypeOf(pointA, Point) && ValidationUtils.isTypeOf(pointB, Point)){
            var pointFrom = pointA.dims();
            var pointTo = pointB.dims();
            if(pointFrom.length > 0 && pointFrom.length == pointTo.length) {
                var sum = 0;
                pointFrom.forEach(function(item, index, arr){
                    sum += FastMath.pow((item - pointTo[index]), 2);
                });
                ret = Math.sqrt(sum);
            }
        }
        
        return ret;
    },
    
    Manhattan : function(pointFrom, pointTo) {
        var ret = Math.NaN;
        if(ValidationUtils.isTypeOf(pointFrom, Point) && ValidationUtils.isTypeOf(pointTo, Point)) {
            if(pointFrom.magnitude() > 0 && pointFrom.magnitude() == pointTo.magnitude()) {
                var sum = 0;
                var from = pointFrom.dims();
                var to = pointTo.dims();
                from.forEach(function(item, index, arr) {
                   sum += Math.abs(item - to[index]);
                });
                ret = sum;
            }
        }
        
        return ret;
    },
    
    Chebyshev : function(pointFrom, pointTo) {
        var ret = Math.Nan;
        
        if(ValidationUtils.isTypeOf(pointFrom, Point) && ValidationUtils.isTypeOf(pointTo, Point)) {
            if(pointFrom.magnitude() > 0 && pointFrom.magnitude() == pointTo.magnitude()) {
                var from = pointFrom.dims();
                var to = pointTo.dims();
                var val = 0;
                from.forEach(function(item, index, arr) {
                    var value = Math.abs(item - to[index]);
                    if(value > val) {
                        val = value;
                    }
                });
                ret = val
            }
        }
        
        return ret;
    },
    
    Calc : function (point1, point2, func) {
        func = ValidationUtils.isValid(func) ? func : Distances.Euclidea;
        return func(point1, point2);
    }
}
 
exports.Distances = Distances;