'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var c = Number(a) + Number(b);
    if (Number.isNaN(c)) {

        return NaN;
    }

    return c;
};
