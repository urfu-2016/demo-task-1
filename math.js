'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (typeof a === 'undefined') return 0;
    if (typeof b === 'undefined') return Number(a);

    return Number(a) + Number(b);
};
