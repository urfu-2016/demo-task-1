'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var sum = parseInt(a) + parseInt(b);

    return arguments[2] ? sum + parseInt(arguments[2]) : sum;
};
