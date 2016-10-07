'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (arguments.length === 2) {
        return parseInt(a) + parseInt(b);
    } else if (arguments.length === 3) {
        return parseInt(a) + parseInt(b) + parseInt(arguments[2]);
    }

    return -1;
};
