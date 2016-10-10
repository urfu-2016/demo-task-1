'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    var summ = 0;
    var part = 0;
    for (var i = 0; i < arguments.length; i++) {

        part = parseInt(arguments[i], 10);
        if (!isNaN(part)) {
            summ += part;
        }
    }
    return summ;
};
