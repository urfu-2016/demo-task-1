'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (arguments.length === 2) {
        return parseInt(a) + parseInt(b);
    }

    return parseInt(a) + parseInt(b) + parseInt(c);
};
