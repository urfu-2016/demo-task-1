'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
// приводим к типу number, если не NaN
    if ((isNaN(a * 1) == false) && (isNaN(b * 1) == false)) {
        a = a * 1;
        b = b * 1;
        return a + b;
    }
    else {
        return "Введены неверные данные.";
    }
};
