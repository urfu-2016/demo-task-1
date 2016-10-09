'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c === undefined) {
        return parseInt(a, 10) + parseInt(b, 10);
    }
    else return parseInt(a, 10)+parseInt(b, 10) + parseInt(c, 10);
};

