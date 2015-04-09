var ValidationUtils = require('./../ValidationUtils').ValidationUtils,
    Point = require('./Point').Point,
    FastMath = require("./FastMath").FastMath;


var Distances = {
    
    
    Euclidea2: function(pointA, pointB) {
        var ret = NaN;
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
    
    Manhattan : function(point1, point2) {
        
    },
    
    Calc : function (point1, point2, func) {
        func = ValidationUtils.isValid(func) ? func : Distances.Euclidea;
        return func(point1, point2);
    }
}
 
exports.Distances = Distances;