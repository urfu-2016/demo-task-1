'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c === undefined) {

        return Number(a) + Number(b);
    } else {

        return Number(a) + Number(b) + Number(c);
    }
};