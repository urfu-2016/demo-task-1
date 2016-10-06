'use strict';

exports.isStar = true;

exports.sum = function (a, b, с) {
    c = c || 0;
    if (!isNaN(parseInt(a)) && !isNaN(parseInt(b))) {
        return a + b + c;
    }
};
