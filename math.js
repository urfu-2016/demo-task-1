'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
// раз третий параметр не обязательный, его проверяем отдельно
// если он не существует или неподходящего типа, то присваиваем 0
    if (c !== undefined && isNaN(Number(c)) === false) {
        c = Number(c);
    } else {
        c = 0;
    }

// приводим к типу number, если не NaN
    if ((isNaN(Number(a)) === false) && (isNaN(Number(b)) === false)) {
        a = Number(a);
        b = Number(b);

        return a + b + c;
    }

    return;
};
