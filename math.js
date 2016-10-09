'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c) {
        return Number(c) + Number(b) + Number(a);
    }

    return Number(b) + Number(a);
};
