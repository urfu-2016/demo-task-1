'use strict';

exports.isStar = true;

exports.sum = function () {
    var sum = parseInt(arguments[0]);
    if (isNaN(sum)) return NaN;
    for (var i = 1; i < arguments.length; i++) {
        var num = parseInt(arguments[i]);
        if (!isNaN(num)) sum += num;
        else return NaN;
    }

    return sum;
};
