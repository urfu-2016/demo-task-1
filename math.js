'use strict';

exports.isStar = true;

exports.sum = function (number1, number2, number3) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    if (number3 === undefined) {
        return number1 + number2;
    }

    return number1 + number2 + parseInt(number3);
};
