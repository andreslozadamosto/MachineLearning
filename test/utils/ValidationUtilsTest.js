var assert = require("assert"),
    describe = require('mocha').describe,
    it = require('mocha').it,
    Validation = require('./../../lib/utils/ValidationUtils').ValidationUtils;



describe('ValidationUtils', function() {
    describe('#isValid()', function() {
        it('should return true for all native values types except null, undefined or NaN', function() {
            // string
            assert.ok(Validation.isValid("as"));
            // number
            assert.ok(Validation.isValid(9));
            // object
            assert.ok(Validation.isValid({}));
            // function
            assert.ok(Validation.isValid(function(){}));
            // array
            assert.ok(Validation.isValid([9,9]));
        });
        
        it('should return false for null or undefened', function() {
            // null
            assert.equal(Validation.isValid(null), false);
            // undefined
            assert.equal(Validation.isValid(undefined), false);
        });
        
        it('should return false for varibles without initialization', function() {
           var a;
           assert.equal(Validation.isValid(a), false);
        });
    });
    
    describe('#isEmptyOrNull()', function(){
        it('should be true for null or undefined values', function() {
            // null
            assert.ok(Validation.isEmptyOrNull(null));
            // undefined
            assert.ok(Validation.isEmptyOrNull(undefined));
        });
        
        it('should be false for any other value than null and undefined', function(){
            // string
            assert.equal(Validation.isEmptyOrNull("as"), false);
            // number
            assert.equal(Validation.isEmptyOrNull(9), false);
            // object
            assert.equal(Validation.isEmptyOrNull({}), false);
            // function
            assert.equal(Validation.isEmptyOrNull(function(){}), false);
            // array
            assert.equal(Validation.isEmptyOrNull([9,9]), false);
        });
    });
    
    describe('#isTypeOf()', function() {
        it('should be true for native types', function(){
            // string
            assert.ok(Validation.isTypeOf("as", String));
            // number
            assert.ok(Validation.isTypeOf(9, Number));
            // object
            assert.ok(Validation.isTypeOf({}, Object));
            // function
            assert.ok(Validation.isTypeOf(function(){}, Function));
            // array
            assert.ok(Validation.isTypeOf([9,9], Array));
        });
        
        it('Should be true for custom classes and inherit classes hierarchy', function(){
            var Automovile = function(){};
            var Moto = function(){
                Automovile.apply(this);
            }
            Moto.prototype = Object.create(Automovile.prototype);
            Moto.prototype.constructor = Moto;
            
            var myAuto = new Automovile();
            var myMoto = new Moto();
            
            assert.ok(Validation.isTypeOf(myAuto, Automovile));
            assert.ok(Validation.isTypeOf(myAuto, Object));
            assert.ok(Validation.isTypeOf(myMoto, Moto));
            assert.ok(Validation.isTypeOf(myMoto, Automovile));
            assert.ok(Validation.isTypeOf(myMoto, Object));
        });
    });
});