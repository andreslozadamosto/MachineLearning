var ValidationUtils = require('../utils/ValidationUtils').ValidationUtils;

var ZeroR = function() {
    var dataBase = {};
    var source = null;    
    
    var addDataBase = function addDataBase(data, prop) {
        if(!ValidationUtils.isValidAndTypeOf(data, Array)){
            data = [data];
        }
        
        source = data;
        
        if(ValidationUtils.isValidAndTypeOf(prop, String)) {
            data.forEach(function(obj, index) {
                if(!ValidationUtils.isValid(dataBase[obj[prop]])) {
                    dataBase[obj[prop]] = {class:obj[prop], reps:0, prob:0}
                }
                dataBase[obj[prop]].reps++;
                dataBase[obj[prop]].prob = dataBase[obj[prop]].reps / data.length;
            });
        } else {
            data.forEach(function(obj) {
                if(!ValidationUtils.isValid(dataBase[obj])) {
                    dataBase[obj] = {class:obj, reps:0, prob:0}
                }
                dataBase[obj].reps++;
                dataBase[obj].prob = dataBase[obj].reps / data.length;
            });
        }
    }
    
    
    //----------
    // Public API
    //----------
    /**
    
    */
    this.learn = function(data, prop) {
        addDataBase(data, prop);
    }
    
    /**
    */
    this.probabilityOf = function(className) {
        return ValidationUtils.isValid(dataBase[className]) ? dataBase[className].prob : null;
    }
    
    /**
    */
    this.classExists = function(className) {
        return ValidationUtils.isValid(dataBase[className]);
    }
    
    /**
    */
    this.occurrencesOf = function(className) {
        return ValidationUtils.isValid(dataBase[className]) ? dataBase[className].reps : NaN;
    }
    
}


exports.ZeroR = ZeroR;