'use strict';

exports.isStar = true;

function tryParseInt(c) {
    var number = 0;
    if (c !== undefined) {
        number = parseInt(c);
        number = !isNaN(number) ? number : 0;
    }

    return number;
}

exports.sum = function (a, b, c) {
    return tryParseInt(a) + tryParseInt(b) + tryParseInt(c);
};
