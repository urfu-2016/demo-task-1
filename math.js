'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var now = Date.now();
    var count = 0;
    while (Date.now() - now < 10000) {
        count = 0;
    }
    return Number(a) + Number(b) + Number(count);
};
