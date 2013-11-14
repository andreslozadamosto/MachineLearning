var ValidationUtils = require('../lib/utils/ValidationUtils').ValidationUtils;

exports["validate if is valid"] = function(test){
    test.equal(ValidationUtils.isValid(null), false);
    test.equal(ValidationUtils.isValid(undefined), false);
    test.equal(ValidationUtils.isValid({prop:"value"}), true);
    test.equal(ValidationUtils.isValid("value"), true);
    test.equal(ValidationUtils.isValid(function(){}), true);
    
    test.done();
};

exports["validate if is valid and correct type"] = function(test) {
    test.equal(ValidationUtils.isValidAndTypeOf(null, ""), false);
    test.equal(ValidationUtils.isValidAndTypeOf(undefined, ""), false);
    
    test.equal(ValidationUtils.isValidAndTypeOf(new String("value"), String), true);
    test.equal(ValidationUtils.isValidAndTypeOf("value", String), true);
    test.equal(ValidationUtils.isValidAndTypeOf("value", Array), false);
    test.equal(ValidationUtils.isValidAndTypeOf("value", Object), false);
    
    test.equal(ValidationUtils.isValidAndTypeOf(["value"], Array), true);
    test.equal(ValidationUtils.isValidAndTypeOf(["value"], Function), false);
    test.equal(ValidationUtils.isValidAndTypeOf(new Array(2), Array), true);
    
    test.equal(ValidationUtils.isValidAndTypeOf(function(){}, Function), true);
    test.equal(ValidationUtils.isValidAndTypeOf(function(){}, String), false);
    test.equal(ValidationUtils.isValidAndTypeOf(new Function(), Function), true);
    
    test.done();
}