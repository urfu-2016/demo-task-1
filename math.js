'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    if (arguments.length === 2) {
        return parseFloat(a) + parseFloat(b);
    } else if (arguments.length === 3) {
        return parseFloat(a) + parseFloat(b) + parseFloat(c);
    }
};
