'use strict';

function isValidNumber(num) {
    return typeof(num) === 'number' && !isNaN(num);
}

exports.isStar = false;

exports.sum = function (a, b) {
    a = Number(a);
    b = Number(b);

    if (isValidNumber(a) && isValidNumber(b)) {
        return a + b;
    }
};


