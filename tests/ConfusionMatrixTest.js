var ConfusionMatrix = require('../lib/confusionmatrix/ConfusionMatrix').ConfusionMatrix;

exports["generate confusion matrix"] = function(test) {
    
    var CM = new ConfusionMatrix();
    
    test.doesNotThrow((function(){ CM.generate();}));
    
    test.done();
}