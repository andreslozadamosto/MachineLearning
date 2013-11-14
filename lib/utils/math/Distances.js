var ValidationUtils = require('../ValidationUtils').ValidationUtils;

var Distances = {
    /**
    */
    Euclidea : function(point1, point2) {
        if(ValidationUtils.isValidAndTypeOf(point1, Array)) {
            if( !ValidationUtils.isValidAndTypeOf(point2, Array) ) {
                point2 = [];
                for(var i=0; i < point1.length; i++) point2[i] = 0;
            }
            if(point1.length == point2.length) {
                var ac = 0;
                for(var i=0; i < point1.length; i++) {
                    if(ValidationUtils.isValidAndTypeOf(point1[i], Number) && ValidationUtils.isValidAndTypeOf(point2[i], Number) && !isNaN(point1[i]) && !isNaN(point2[i])) {
                        ac += Math.pow(point1[i] - point2[i], 2);
                    } else {
                        return NaN;
                    }
                }
                return Math.sqrt(ac);
            } else {
                return NaN;
            }
        } else {
            return NaN;
        }
        
    },
    
    Manhattan : function(point1, point2) {
        
    },
    
    Calc : function (point1, point2, func) {
        func = ValidationUtils.isValid(func) ? func : Distances.Euclidea;
        return func(point1, point2);
    }
}
 
exports.Distances = Distances;