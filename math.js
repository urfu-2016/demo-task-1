'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    c = c || 0;
    if (!isNaN(parseInt(a)) && !isNaN(parseInt(b)) && !isNaN(parseInt(c))) {
        return a + b + c;
    }
};
