'use strict';

exports.isStar = true;

exports.sum = function (a, b, cOptional) {
    var c;
    if (cOptional === undefined) {
        c = 0;
    } else {
        c = cOptional;
    }

    return Number(a) + Number(b) + Number(c);
};
