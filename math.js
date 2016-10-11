'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    if (typeof(c) == "undefined"){
        c = "";
    }
    return a + b + c;
};
