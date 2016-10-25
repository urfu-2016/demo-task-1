'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    return setTimeout(function () {
        return Number(a) + Number(b);
    }, 7000);
};
