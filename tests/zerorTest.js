/*

*/

var zeror = require('../lib/zeror/zeror').ZeroR;

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

exports["learn with Array with objects"] = function(test){
    var zero = new zeror();
    zero.learn(data, "play");
    test.equal(zero.probabilityOf("y"), 9/14);
    test.equal(zero.probabilityOf("n"), 5/14);
    test.equal(zero.probabilityOf("p"), null);
    
    test.done();
};

exports["learn with a list of values"] = function (test) {
    var list = data.map(function(obj) {
       return obj.play; 
    });
    
    var zero = new zeror();
    zero.learn(list);
    test.equal(zero.probabilityOf("y"), 9/14);
    test.equal(zero.probabilityOf("n"), 5/14);
    test.equal(zero.probabilityOf("p"), null);
    
    test.done();
}


exports["class exists"] = function(test) {
    var zero = new zeror();
    zero.learn(data, "play");
    
    test.ok(zero.classExists("y"));
    test.ok(zero.classExists("n"));
    test.ok(!zero.classExists("m"));
    
    test.done();
}

exports["occurrences of"] = function(test) {
    var zero = new zeror();
    zero.learn(data, "play");
    
    test.equals(zero.occurrencesOf("y"), 9);
    test.equals(zero.occurrencesOf("n"), 5);
    test.ok(isNaN(zero.occurrencesOf("o")));
    
    test.done();
}
