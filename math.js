'use strict';

exports.isStar = true;

function tryParseFloat(c) {
    var number = 0;
    if (c !== undefined) {
        number = parseFloat(c);
        number = !isNaN(number) ? number : 0;
    }

    return number;
}

exports.sum = function (a, b, c) {
    return tryParseFloat(a) + tryParseFloat(b) + tryParseFloat(c);
};
