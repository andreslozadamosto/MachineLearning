/**
 * @class Validation
 * @description Class with function to validate values
 */
var Validation = {};

/**
 * @method isValid
 * @description Validate if a value is not null/undefined.
 * @return True if data is different to undefined and null. Otherwise return False.
 */
Validation.isValid = function(value) {
    return undefined !== value && null !== value;
}

/**
 * @method isEmptyOrNull
 * @description Indicate if the value is empty or null.
 * @return Return true if data is undefined or null.
 */
Validation.isEmptyOrNull = function(value) {
    return !Validation.isValid(value);
}

/**
 * @method isTypeOf
 * @description Checks if the value type if the type defined.
 * @return Return True if the value type is correct. Otherwise returns False.
 */
Validation.isTypeOf = function(data, type) {
    return Validation.isValid(data) && Validation.isValid(type) && (data instanceof type || (typeof data).toLowerCase() == type.name.toLowerCase());
}

//export
exports.ValidationUtils = Validation;