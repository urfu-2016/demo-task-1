'use strict';

exports.isStar = true;

exports.sum = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        var a = parseInt(arguments[i]);
        if (!isNaN(a)) {
            sum += a;
        } else {
            return NaN;
        }
    }

    return sum;
};
