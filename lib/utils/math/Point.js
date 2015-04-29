var Validations = require("../ValidationUtils").ValidationUtils;

var distanceTo = function(point, distanceFunc) {

}

/**
 * @class Point
 */
function Point() {
    var _dims = [];
    var scope = this;
    this.distanceTo = distanceTo;
    
    /**
     * Add new values to the Pooint.
     */
    this.add = function(value) {
        // allways use arrays to add values
        var values = (value instanceof Array) ? value : [value];
        // filter values that are not a Number
        values = values.filter(function(val){
            return Validations.isValid(val) && !isNaN(val);
        });
        //add values to the list
        _dims = _dims.concat(values);
    }

    this.get = function(pos) {
        return (!isNaN(pos) && _dims.length >= pos) ? _dims[pos-1] : null;
    }
    
    /**
     * Add a range of values
     */
    this.addRange = function(values) {
        if (Validations.isTypeOf(values, Array)) {
            var vals = values.filter(function(x){
                return !isNaN(x);
            });
            _dims = _dims.concat(vals);
        }
    }
    
    /**
     * Rem values (dimensions).
     */
    this.rem = function(pos) {
        if(!isNaN(pos) && _dims.length >= pos) {
            _dims = _dims.slice(0, (pos-1)).concat(_dims.slice(pos,_dims.length));
        }
    }
    
    /**
     * Returns a copy of the dimensions list
     */
    this.dims = function() {
        return _dims.concat([]);
    }
    
    this.magnitude = function() {
        return _dims.length;
    }
    
    this.compare = function() {
        
    }
}

exports.Point = Point;