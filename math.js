'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (arguments.length === 3) {

        return parseInt(a) + parseInt(b) + parseInt(c);
    }
    
    return parseInt(a) + parseInt(b);
};
