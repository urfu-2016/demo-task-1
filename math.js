'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    var now = Date.now();
    var count = 0;
    while (Date.now() - now < 1800) {
        count = 0;
    }

    return Number(a) + Number(b) + Number(count);
};

exports.whileTrue = function () {
    //eslint disable
    var c;
    while(true) {
        c = 0;
    }

    return c;
};    
