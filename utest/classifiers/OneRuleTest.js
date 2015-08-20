var describe = require('mocha').describe,
    it = require('mocha').it,
    OneRule = require('./../../src/classifiers/OneRule').OneRule,
    mock = require('simple-mock'),
    data = require('../commons/dataForTest').data,
    assert = require('chai').assert;
    
describe("OneRule Test", function(){
    it('Existe clasificador', function(){
       assert.isDefined(OneRule);
    });
    
    describe("Aprender y predecir simple", function(){
        it("predecir a partir de una enseñanza simple", function(){
            var oner = new OneRule();
            oner.learn(data, "play");
            
            assert.equal(oner.predict({outlook:"rainy"}), "n");
            assert.equal(oner.predict({outlook:"sunny"}), "y");
            assert.equal(oner.predict({outlook:"overcast"}), "y");
        });
    });
});