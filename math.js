'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var sum = Number(a) + Number(b);
    if (c) {
        sum += Number(c);
    }

    return sum;
};
