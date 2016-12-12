'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var sum = 0;
    if (a !== undefined) {
        sum += parseInt(a);
    }

    if (b !== undefined) {
        sum += parseInt(b);
    }

    if (c !== undefined) {
        sum += parseInt(c);
    }

    return sum;
};
