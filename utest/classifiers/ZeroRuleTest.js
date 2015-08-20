var describe = require('mocha').describe,
    it = require('mocha').it,
    ZeroRule = require('./../../src/classifiers/ZeroRule').ZeroRule,
    mock = require('simple-mock'),
    data = require('../commons/dataForTest').data,
    assert = require('chai').assert;
    

describe('ZeroRule Test', function(){
    it('Existe clasificador', function(){
       assert.isDefined(ZeroRule);
    });
    
    describe("Aprender y generar clases", function(){
        it('Aprende una vez y me da 2 clases', function(){
           var zeror = new ZeroRule();
           zeror.learn(data, "play");
           var clases = zeror.classes();
           
           assert.isArray(clases);
           assert.isTrue(clases.length == 2);
           assert.include(clases, "y");
           assert.include(clases, "n");
           
           assert.equal(zeror.occOf("y"), 9);
           assert.equal(zeror.occOf("n"), 5);
           
           assert.equal(zeror.propOf("y"), 9/14);
           assert.equal(zeror.propOf("n"), 5/14);
        });
    });
    
    describe("Predecir", function(){
       it("Predecir yes", function(){
            var clazz = new ZeroRule().learn(data, "play").predict();
           
           assert.equal(clazz, "y");
       });
    });
});
