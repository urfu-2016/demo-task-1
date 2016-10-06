'use strict';

exports.isStar = true;

exports.sum = function (a, b, cOptional) {
    var c;
    if (cOptional === undefined) {
        c = 0;
    } else {
        c = cOptional;
    }

    if (!isNaN(parseInt(a)) && !isNaN(parseInt(b)) && !isNaN(parseInt(c))) {
        return a + b + c;
    }
};
