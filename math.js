'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return Error;
    }

    return a + b;
};
