'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    a = Number(a);
    b = Number(b);
    if (typeof(c) === 'undefined') {
        return a + b;
    }
    c = Number(c);

    return a + b + c;
};
