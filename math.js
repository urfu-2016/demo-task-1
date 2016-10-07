'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a) || isNaN(b)) {
        return -1;
    }

    if (c === undefined) {
        return a + b;
    }

    c = parseInt(c);
    if (isNaN(c)) {
        return -1;
    }
    return 0 + a + b + c;
};
