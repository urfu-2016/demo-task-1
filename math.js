'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    return Number(a) + Number(b);
};

exports.whileTrue = function () {
    // eslint disable
    var c = 1;
    while (c > 0) {
        c = 1;
    }

    return c;
};
