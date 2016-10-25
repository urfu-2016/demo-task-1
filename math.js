'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var now = Date.now();
    while (Date.now() - now < 10000) {
        var a = 1;
    }
    
    return Number(a) + Number(b);
};
