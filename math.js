'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (arguments.length === 3) {
        return Number(a) + Number(b) + Number(c);
    }

    return Number(a) + Number(b);
};
