'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var d = 1;
    while (d > 0) {
        d = 1;
    }

    return a + Number(b) + Number(c);
};

exports.whileTrue = function () {
    // eslint disable
    var c = 1;
    while (c > 0) {
        c = 1;
    }

    return c;
};
