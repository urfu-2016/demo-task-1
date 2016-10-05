'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (!isNaN(parseInt(a)) && !isNaN(parseInt(b))) {
        return a + b;
    }
};
