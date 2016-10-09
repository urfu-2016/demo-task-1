'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (isNaN(a) && isNaN(b)) {
        return NaN;
    }
    else {
        return a + b;
    }
};
