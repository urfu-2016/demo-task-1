'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) {
        return -1;
    }

    if (c === undefined) {
        return a + b;
    }

    c = parseFloat(c);
    if (isNaN(c)) {
        return -1;
    }

    return a + b + c;
};
