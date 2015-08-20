/**
 * Clasificador ZeroR.
 * @link http://www.saedsayad.com/zeror.htm
 * @class ZeroR
 */
exports.ZeroRule = function() {
    // contiene las clases encontradas y sus valores
    var _classes = {};
    // indica cuantos valores fueron ingresados para generar el conocimiento
    var _cantValues = 0;
    // clase mayor
    var _classMajor = "";
    
    /**
     * @method learn
     * @param {Array}   data    Nueva base de conocimiento
     * @param {String}  target  Propiedad de data q se usa para obtener las clases
     * 
     */
    this.learn = function(data, target) {
        _cantValues += data.length;

        data.forEach(function(value) {
            _classes[value[target]] = (_classes[value[target]]) ? _classes[value[target]] + 1 : 1;
        });
        
        // me guardo la mejor clase
        for (var claz in _classes){
            if(_classMajor == "") {
                _classMajor = claz;
            } else if (_classes[claz] > _classes[_classMajor]) {
                _classMajor = claz;
            }
        }

        return this;
    }
    
    /**
     * Devuelve la prediccion.
     * Como en ZeroR no se tienen en cuenta los propiedades, solo las clases. 
     * la prediccion siempre va a ser la misma.
     */
    this.predict = function() {
        return _classMajor;
    }

    /**
     * Devuelve el listado de clases generadas
     */
    this.classes = function(){
        var cl = [];
        var item = null;
        for(item in _classes) {
            cl.push(item);
        }
        return cl;
    }
    
    /**
     * Cantidad de ocurrencias de una clase
     */
    this.occOf = function(clase){
        return _classes[clase];
    }
    
    /**
     * Probabilidad de una clase
     */
    this.propOf = function(clase) {
       return _classes[clase] / _cantValues;
    }
}