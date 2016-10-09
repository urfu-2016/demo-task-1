'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var sum = a + b;
    return arguments[2] ? sum + arguments[2] : sum;
};
