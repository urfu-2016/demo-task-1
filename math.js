'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var sum = 0;
    if (a !== undefined) {
        sum += parseInt(a);
    }

    if (a !== undefined) {
        sum += parseInt(b);
    }

    if (a !== undefined) {
        sum += parseInt(c);
    }

    return sum;
};
