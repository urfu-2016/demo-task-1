'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c == undefined) {
        return a+b;
    }
    return a+b+c;
};
