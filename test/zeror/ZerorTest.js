var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    ZeroR = require('./../../../lib/utils/zeror').ZeroR,
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
    
    describe()

});