var ValidationUtils = {
}

ValidationUtils.isValid = function(data) {
    return data != undefined && data != null;
}


ValidationUtils.isValidAndTypeOf = function(data, type) {
    var bool = false;
    if(arguments.length > 0) {
        bool = ValidationUtils.isValid(data);
    }
    if(bool) {
        if(typeof data == "string" && type === String) {
            bool = true;
        } else if(arguments.length > 1 && ValidationUtils.isValid(type) &&  type instanceof Function) {
            bool = bool && (data instanceof type || typeof data == 'number');
        }
    }
    
    return bool;
}

exports.ValidationUtils = ValidationUtils;