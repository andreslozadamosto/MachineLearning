/**
 * Clasificador OneR
 * @link http://www.saedsayad.com/oner.htm
 * @link https://www.youtube.com/watch?v=phnkMGDZUNI&index=4&list=PLea0WJq13cnCS4LLMeUuZmTxqsqlhwUoe
 * @link http://www.csee.wvu.edu/~timm/cs591o/old/BasicMethods.html
 * @link http://es.slideshare.net/pierluca.lanzi/machine-learning-and-data-mining-12-classification-rules
 * @link http://www.cs.ccsu.edu/~markov/ccsu_courses/DataMining-7.html
 * @link http://staffwww.itn.liu.se/~aidvi/courses/06/dm/lectures/lec4.pdf
 * @link http://www.banglajol.info/index.php/BJSIR/article/view/3668/3021
 * @class OneRule
 */
exports.OneRule = function() {
    var _classes = [];
    var _data = null;
    var _bestPredictor = null;
    var _bestPredictorTable = null;
    
    /**
     * Agrega aprendizaje al algoritmo
     * @param {Array}   data    Listado de datos
     * @param {String}  taget   Columna donde se toman las clases
     */
    this.learn = function(data, target) {
        
        // inicializo el listado de clases del target
        _initClasses(data, target);
        
        // armo el listado de propiedades
        var predictors = [];
        var row = data[0];
        for(var item in row){
            if(item != target) {
                predictors.push(item);
            }
        }

        // genero las tablas de frecuencia
        var freqTables = [];
        var table = null;
        var bestError = 1;
        var self = this;
        
        // recorro todas las columnas y voy armando
        // la table de frecuencia y calculando su error
        // finalmente voy seleccionando la tabla con menos error
        predictors.forEach(function(value) {
            var table = _genFrequencyTable(data, value, target);
            freqTables.push(table);
            var tableError = _calcError(table, data.length);
            if (tableError < bestError) {
                bestError = tableError;
                _bestPredictor = value;
                _bestPredictorTable = table;
            }
        });
        
        return this;
    };
    
    /**
     * Predice la clase dada una fila de datos simil a las de 
     * aprendizaje.
     * @param {Object}  row Objeto con una columna con el predictor seleccionado
     */
    this.predict = function(row){
        var rule = row[_bestPredictor];
        return _bestPredictorTable[rule]._bestClass;
    }
    
    /**
     * Calcula el error de una tabla de frecuencia.
     * @param {Object}  table   Referencia a la tabla de frecuencia
     * @param {Number}  canta   Cantidad de filas que hay el los datos
     */
    var _calcError = function(table, cant){
        // acumulo la cantidad de ocurrencias de las mejores clases de cada regla
        var accOk = 0;
        
        // obtengo el mejor class para cada regla
        for (var rule in table){
            console.log("rule: " + rule)
            table[rule]["_bestClass"] = "";
            for(var clas in table[rule]) {
                if(table[rule]._bestClass == "") {
                    table[rule]._bestClass = clas;
                } else if (table[rule][clas] > table[rule][table[rule]._bestClass]) {
                    table[rule]._bestClass = clas;
                }
            }
            accOk += table[rule][table[rule]._bestClass];
        }
        
        return 1 - (accOk/cant);
    };
    
    var _initClasses = function(data, target){
        data.forEach(function(value) {
            if (_classes.indexOf(value[target]) < 0) _classes.push(value[target]);
        });
    };
    
    /**
     * Genera la tabla de frecuencia en este formato:
     * table = {
     *      rule1: {class1:_num_of_occ_, class2:_num_of_occ_},
     *      rule2: {class1:_num_of_occ_, class2:_num_of_occ_}
     *      rule3: {class1:_num_of_occ_, class2:_num_of_occ_}
     * }
     */
    var _genFrequencyTable = function(data, predictor, target) {
        var table = {};
        // recorro toda la coleccion
        data.forEach(function(value) {
            // regla de la fila
            var rule = value[predictor];
            if (!table[rule]) {
                // si no estaba, la inicializo con todas las clases en 0
                table[rule] = {};
                _classes.forEach(function(value){
                    table[rule][value] = 0;
                });
            }
            // acumulo la ocurrencia en la clase
            table[rule][value[target]]++;
        });
        return table;
    };
};