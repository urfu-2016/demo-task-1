'use strict';

exports.isStar = true;

exports.sum = function (first, second, third) {
    var num1 = parseInt(first);
    var num2 = parseInt(second);
    if (third === undefined) {
        return num1 + num2;
    }
    var num3 = parseInt(third);

    return num1 + num2 + num3;
};
