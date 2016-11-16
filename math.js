'use strict';

exports.isStar = false;

exports.sum = function (a, b) {
    if (typeof a === 'undefined' && typeof b === 'undefined') {
        return 0;
    }
    if (typeof a === 'undefined') {
        return Number(b);
    }
    if (typeof b === 'undefined') {
        return Number(a);
    }

    return Number(a) + Number(b);
};
