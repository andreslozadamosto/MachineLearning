var ValidationUtils = require('../utils/ValidationUtils').ValidationUtils;

/**
 * @class ZeroR
 * @description Clase que implementa el algoritmo de clustering ZeroR.
 **/
var ZeroR = function() {
    var dataBase = {};
    var source = [];    
    
    /**
     * Agrega aprendizage al conicimiento.
     **/
    var addDataBase = function addDataBase(data, prop) {
        //verifico que sea array
        if(!ValidationUtils.isTypeOf(data, Array)){
            data = [data];
        }
        
        //filtro los datos que estan mal
        if(ValidationUtils.isTypeOf(prop, String)) {
            //son objetos complejos
            data = data.filter(function(x){
                return ValidationUtils.isValid(x) && x.hasOwnProperty(prop) && ValidationUtils.isValid(x[prop]);
            });
        } else {
            //nativos: String/Number
            data = data.filter(function(x){
               return ValidationUtils.isValid(x);
            });
        }
        
        if(data.length > 0) {
            //concateno a la base de conocimiento
            source = source.concat(data);
            
            if(ValidationUtils.isTypeOf(prop, String)) {
                //objetos complejos
                data.forEach(function(obj, index) {
                    if(!ValidationUtils.isValid(dataBase[obj[prop]])) {
                        dataBase[obj[prop]] = {class:obj[prop], reps:0, prob:0}
                    }
                    dataBase[obj[prop]].reps++;
                    dataBase[obj[prop]].prob = dataBase[obj[prop]].reps / source.length;
                });
            } else {
                //objetos nativos
                data.forEach(function(obj) {
                    if(!ValidationUtils.isValid(dataBase[obj])) {
                        dataBase[obj] = {class:obj, reps:0, prob:0}
                    }
                    dataBase[obj].reps++;
                    dataBase[obj].prob = dataBase[obj].reps / source.length;
                });
            }
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