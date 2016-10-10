'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c === undefined) {

        return Number(a) + Number(b);
    }

    return Number(a) + Number(b) + Number(c); 
};
