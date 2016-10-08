'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    if (isNaN(a) && isNaN(b)) return NaN; else return a+b;
};
