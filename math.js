'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
// приводим к типу number, если не NaN
    if ((isNaN(Number(a)) === false) && (isNaN(Number(b)) === false)) {
        a = Number(a);
        b = Number(b);

        return a + b;
    }

    return 'Введены неверные данные.';
};
