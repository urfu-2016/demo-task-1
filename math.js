'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    var res = (parseInt(a) || 0) + (parseInt(b) || 0);

    for (var index = 2; index < arguments.length; index++) {
        res += parseInt(arguments[index]);
    }

    return res;
};
