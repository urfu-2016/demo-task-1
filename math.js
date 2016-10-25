'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    c = c || 0;
    return Number(a) + Number(b) + Number(c);
};

exports.whileTrue = function () {
    // eslint disable
    var c = 1;
    while (c > 0) {
        c = 1;
    }

    return c;
};
