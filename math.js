'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var x = 0;
    if (c === undefined) {
        x = parseInt(a, 10) + parseInt(b, 10);
    } else {
        x = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    }

    return x;
};

