var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    ZeroR = require('./../../lib/zeror/zeror').ZeroR,
    mock = require('simple-mock');
    
describe('ZeroR', function() {
    var data = [
        {outlook:"rainy",       temp:"hot",     humidity:"high",    windy:"f",  play:"n"},
        {outlook:"rainy",       temp:"hot",     humidity:"high",    windy:"t",  play:"n"},
        {outlook:"overcast",    temp:"hot",     humidity:"high",    windy:"f",  play:"y"},
        {outlook:"sunny",       temp:"mild",    humidity:"high",    windy:"f",  play:"y"},
        {outlook:"sunny",       temp:"cool",    humidity:"normal",  windy:"f",  play:"y"},
        {outlook:"sunny",       temp:"cool",    humidity:"normal",  windy:"t",  play:"n"},
        {outlook:"overcast",    temp:"cool",    humidity:"normal",  windy:"t",  play:"y"},
        {outlook:"rainy",       temp:"mild",    humidity:"high",    windy:"f",  play:"n"},
        {outlook:"rainy",       temp:"cool",    humidity:"normal",  windy:"f",  play:"y"},
        {outlook:"sunny",       temp:"mild",    humidity:"normal",  windy:"f",  play:"y"},
        {outlook:"rainy",       temp:"mild",    humidity:"normal",  windy:"t",  play:"y"},
        {outlook:"overcast",    temp:"mild",    humidity:"high",    windy:"t",  play:"y"},
        {outlook:"overcast",    temp:"cold",    humidity:"normal",  windy:"f",  play:"y"},
        {outlook:"sunny",       temp:"mild",    humidity:"high",    windy:"t",  play:"n"}
    ];
    
    describe('#learn', function(){
        it('learn with Array with objects', function(){
            var zero =   new ZeroR();
        
            zero.learn(data, "play");
            
            assert.equal(zero.probabilityOf("y"), 9/14);
            assert.equal(zero.probabilityOf("n"), 5/14);
            assert.equal(zero.probabilityOf("p"), null);
        });
        
        it('learn with a list of values', function(){
            var list = data.map(function(obj) {
               return obj.play; 
            });
            
            var zero = new ZeroR();
            zero.learn(list);
            assert.equal(zero.probabilityOf("y"), 9/14);
            assert.equal(zero.probabilityOf("n"), 5/14);
            assert.equal(zero.probabilityOf("p"), null);
        });
    });
    
    describe('#classExist', function(){
        it('have to exist if it is added', function(){
            var zero = new ZeroR();
            zero.learn(data, "play");
            
            assert.ok(zero.classExists("y"));
            assert.ok(zero.classExists("n"));
            assert.ok(!zero.classExists("m"));
        });
    });
    
    describe('#ocurrenceOf', function(){
        it('have to give me the occurrence of a class', function(){
            var zero = new ZeroR();
            zero.learn(data, "play");
            
            assert.equal(zero.occurrencesOf("y"), 9);
            assert.equal(zero.occurrencesOf("n"), 5);
            assert.ok(isNaN(zero.occurrencesOf("o")));
        });
    })
});