'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c) {
        return Number(a) + Number(b) + Number(c);
    }

    return Number(a) + Number(b);
};
