'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    return parseInt(a) + parseInt(b) + (c === undefined ? 0 : parseInt(c));
};
