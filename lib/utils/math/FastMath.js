var FastMath = {}

FastMath.pow = function(base, exp) {
    var result = 1.0;
    var num = base;
    while (exp > 0) {
        if (exp % 2 == 1)
            result *= num;
        exp >>= 1;
        num *= num;
    }

    return result;
}

exports.FastMath = FastMath;