'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c === undefined) {
        return parseInt(a) + parseInt(b);
    } else {
        return parseInt(a) + parseInt(b) + parseInt(c);
    }
};
