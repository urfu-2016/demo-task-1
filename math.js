'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    if (typeof a === 'string' && typeof b === 'string') {
        throw new TypeError();
    }
    return a + b;
};
