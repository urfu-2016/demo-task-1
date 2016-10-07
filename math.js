'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (arguments.length === 2) {
        return (parseInt(a)) + b;
    }

    return (parseInt(a)) + b + c;
};
