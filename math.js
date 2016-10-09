'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var sum = 0;
    for (var i = 0; i < 3 && i < arguments.length; i++) {
        if (arguments[i] != undefined) {
            sum += parseInt(arguments[i]);
        }
    }
    return sum;
};
